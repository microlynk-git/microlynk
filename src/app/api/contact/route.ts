import { NextResponse } from 'next/server';
import { z } from 'zod';

const optionalField = z.string().trim().max(10000).optional().default('');

const contactSchema = z.object({
  name: z.string().trim().min(1).max(10000),
  email: z.string().trim().max(10000).email(),
  company: optionalField,
  service: optionalField,
  customService: optionalField,
  country: optionalField,
  phone: optionalField,
  message: z.string().trim().min(1).max(10000),
});

function isAppsScriptDeploymentUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:'
      && url.hostname === 'script.google.com'
      && !url.username
      && !url.password
      && /^\/macros\/s\/[^/]+\/exec$/.test(url.pathname)
      && !/\/(?:YOUR_DEPLOYMENT_ID|your-deployment-id|DEPLOYMENT_ID)\/exec$/i.test(url.pathname);
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const submission = contactSchema.safeParse(body);

  if (!submission.success) {
    return NextResponse.json(
      { error: 'Provide a name, a valid email, and a message. Each field must be text of at most 10,000 characters.' },
      { status: 400 }
    );
  }

  const scriptUrl = process.env.CONTACT_FORM_SCRIPT_URL?.trim();
  const secret = process.env.CONTACT_FORM_SECRET?.trim();

  if (!scriptUrl || !secret) {
    console.error('Contact form Apps Script environment variables are missing.');
    return NextResponse.json(
      { error: 'Contact form is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  if (!isAppsScriptDeploymentUrl(scriptUrl)) {
    console.error('CONTACT_FORM_SCRIPT_URL must be the actual Apps Script Web app URL ending in /exec, with no placeholder deployment ID.');
    return NextResponse.json(
      { error: 'Contact form is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Only validated form fields are forwarded; the secret comes from the server.
      body: JSON.stringify({ ...submission.data, secret }),
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(20000),
    });

    if (!response.ok) {
      console.error(`Contact form Apps Script returned HTTP ${response.status}. Check the deployment URL and web app access settings.`);
      return NextResponse.json(
        { error: 'Could not save your message. Please try again.' },
        { status: 502 }
      );
    }

    const result: unknown = await response.json();

    // Apps Script can report a failure in JSON while returning HTTP 200.
    if (!result || typeof result !== 'object' || !('ok' in result) || result.ok !== true) {
      console.error('Contact form Apps Script did not confirm the submission.');
      return NextResponse.json(
        { error: 'Could not save your message. Please try again.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: unknown) {
    const timedOut = error instanceof Error && error.name === 'TimeoutError';
    console.error(timedOut
      ? 'Contact form Apps Script request timed out.'
      : 'Contact form Apps Script request or response failed.');

    return NextResponse.json(
      { error: 'Could not confirm your submission. Please try again later.' },
      { status: timedOut ? 504 : 502 }
    );
  }
}
