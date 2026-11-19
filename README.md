This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form: Google Apps Script

The Contact Us page posts to `/api/contact`. This server route forwards the form fields and a shared secret to a Google Apps Script web app. The script writes to the `Contacts` tab with columns `Timestamp`, `Name`, `Email`, `Company`, `Service`, `Country`, `Phone`, and `Message`.

Deploy the script as a web app that executes as the sheet owner and allows access by Anyone. Keep the spreadsheet itself Restricted. The script must accept a JSON POST body containing the contact fields and `secret`, verify it against its `CONTACT_FORM_SECRET` script property, and return JSON `{ "ok": true }` only after saving the row. Rejections must return `{ "ok": false }`.

Add these server-only variables to `.env.local` next to `package.json` and to your hosting provider's environment settings:

```env
CONTACT_FORM_SCRIPT_URL="https://script.google.com/macros/s/your-deployment-id/exec"
CONTACT_FORM_SECRET="same-value-as-the-script-property"
```

Use the full deployment URL ending in `/exec`. The deployment ID is part of that URL; it does not need a separate variable. The spreadsheet ID stays in the Apps Script `SPREADSHEET_ID` property, populated by running the script's `setup` function from its editor.

Keep the secret out of frontend code and do not prefix these variables with `NEXT_PUBLIC_`. The API validates submissions, waits up to 20 seconds for the script, and checks the JSON `ok` flag as well as the HTTP status. A timeout means saving could not be confirmed; the script may still finish writing the row.

Restart the development server after changing local environment variables. Redeploy the website after changing hosting environment variables.

## Newsletter: Google Sheets API

The newsletter route still uses the Google Sheets API with a service account. Its existing environment variables are:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account-email@project-id.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID="your-spreadsheet-id"
```

It writes `Timestamp` and `Email` to the `Newsletter` tab in `GOOGLE_SPREADSHEET_ID`. Share that spreadsheet with `GOOGLE_SERVICE_ACCOUNT_EMAIL` as an Editor to use this separate integration.
