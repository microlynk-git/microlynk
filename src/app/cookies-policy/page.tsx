import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePolicy() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-inter text-gray-800">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-backgroundDarkBlue mb-2 font-regular">COOKIE NOTICE</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: September 28, 2025</p>

        <p className="mb-6">
          This Cookie Notice explains how Microlynk (“Company,” “we,” “us,” or “our”) uses cookies
          and similar technologies when you visit our website www.Microlynk.com (“Website”). It
          describes what these technologies are, why we use them, and how you can manage your
          preferences.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">1. WHAT ARE COOKIES?</h2>
          <p className="mb-4">
            <strong>In Short:</strong> Cookies are small data files stored on your device when you visit a website.
            Cookies allow websites to recognize your device and remember your actions and
            preferences. They may store details such as login information, language settings, or items in
            a shopping cart.
          </p>
          <p className="mb-2">Cookies may be:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> Stored until deleted or expired.</li>
            <li><strong>First-Party Cookies:</strong> Placed by us to operate our Website.</li>
            <li><strong>Third-Party Cookies:</strong> Placed by trusted partners to support analytics, advertising, and performance monitoring.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">2. WHY DO WE USE COOKIES?</h2>
          <p className="mb-4">
            <strong>In Short:</strong> We use cookies to provide essential functionality, improve performance,
            personalize experiences, and deliver relevant content.
          </p>
          <p className="mb-2">We use cookies for purposes including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Operations:</strong> Enabling login, account security, and navigation.</li>
            <li><strong>Performance & Analytics:</strong> Understanding how visitors use our Website (e.g., pages visited, errors encountered) to improve usability.</li>
            <li><strong>Functionality:</strong> Remembering user preferences such as language and display settings.</li>
            <li><strong>Advertising & Marketing:</strong> Delivering personalized ads, measuring campaign effectiveness, and showing content relevant to your interests.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">3. TYPES OF COOKIES WE USE</h2>
          <p className="mb-4">
            <strong>In Short:</strong> Our Website may use the following categories of cookies.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Strictly Necessary Cookies</strong> – Required for the Website to function (e.g., authentication, system security).</li>
            <li><strong>Performance Cookies</strong> – Collect anonymous data about how visitors use our Website.</li>
            <li><strong>Functional Cookies</strong> – Remember choices (such as language or region) to provide a customized experience.</li>
            <li><strong>Advertising Cookies</strong> – Track browsing behavior to deliver tailored ads and measure engagement.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">4. DO WE USE SIMILAR TECHNOLOGIES?</h2>
          <p className="mb-4">
            <strong>In Short:</strong> Yes, we may use technologies similar to cookies for analytics and marketing.
          </p>
          <p className="mb-2">These include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web Beacons / Pixels:</strong> Small images embedded in emails or web pages that track engagement.</li>
            <li><strong>Local Storage:</strong> Browser-based storage for faster access to certain features.</li>
            <li><strong>Tracking URLs:</strong> Unique links that help us measure traffic sources and campaign performance.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">5. HOW CAN YOU CONTROL COOKIES?</h2>
          <p className="mb-4">
            <strong>In Short:</strong> You have the right to accept, reject, or adjust your cookie preferences.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies. Instructions vary by browser, so check your settings.</li>
            <li><strong>Cookie Banners:</strong> When visiting our Website, you can manage preferences directly from the cookie banner.</li>
            <li><strong>Third-Party Tools:</strong> Services like YourAdChoices let you opt out of certain advertising cookies.</li>
          </ul>
          <p className="mt-4">
            <strong>Please note:</strong> Disabling cookies may affect the functionality and performance of our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">6. UPDATES TO THIS COOKIE NOTICE</h2>
          <p className="mb-4">
            <strong>In Short:</strong> We may update this Notice to reflect changes in our practices or legal requirements.
          </p>
          <p>
            The “Last Updated” date at the top indicates the most recent revision. If we make material
            changes, we may provide additional notice (e.g., a banner or direct communication).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">7. CONTACT US</h2>
          <p className="mb-2">
            If you have questions about this Cookie Notice or our use of cookies, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:connect@Microlynk.com" className="text-backgroundLightBlue hover:underline">connect@Microlynk.com</a>
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}
