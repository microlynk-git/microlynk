import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-inter text-gray-800">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-backgroundDarkBlue mb-2 font-regular">Terms and Conditions for Microlynk</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: December 16, 2025</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Microlynk LLC. These Terms and Conditions ("Terms") govern your use of our
            website located at <a href="https://microlynk.vercel.app/" className="text-backgroundLightBlue hover:underline">https://microlynk.vercel.app/</a> (the "Service") operated by Microlynk.
          </p>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree
            with any part of these terms, then you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">2. Acceptance of Terms</h2>
          <p>
            By accessing or using the website operated by Microlynk LLC (“Company,” “we,” “us,” or
            “our”), you agree to be bound by these Terms & Conditions (the “Agreement”). If you do not
            agree, you must not use this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">3. Eligibility & Accounts</h2>
          <p className="mb-2">You represent and warrant that you:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>are at least the age of majority in your jurisdiction;</li>
            <li>have full power and authority to enter into this Agreement; and</li>
            <li>will provide accurate information when creating an account (if applicable) and keep it current.</li>
          </ul>
          <p>
            You are solely responsible for all activities under your account and for safeguarding your
            login credentials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">4. License to Use the Website</h2>
          <p>
            We grant you a limited, revocable, non-exclusive, non-transferable license to access and
            use this website for lawful purposes, subject to this Agreement. We reserve all rights not
            expressly granted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">5. User Content, Inputs & Outputs</h2>
          <p className="mb-4">
            You retain ownership of any data, text, files, or content you submit to the website (“Inputs”)
            and of any content or responses generated for you through the website (“Outputs”), to the
            extent permitted by law.
          </p>
          <p className="mb-4">
            By submitting Inputs, you grant Microlynk LLC a non-exclusive, worldwide license to use
            them solely for providing, maintaining, securing, and improving the website, complying with
            legal obligations, and preventing abuse.
          </p>
          <p>
            You are solely responsible for ensuring you have the rights to submit Inputs and use
            Outputs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">6. Acceptable Use</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>use the website for unlawful, fraudulent, or harmful purposes;</li>
            <li>reverse engineer, copy, or exploit any part of the website;</li>
            <li>infringe intellectual property, privacy, or other rights of others;</li>
            <li>interfere with or attempt to bypass security systems;</li>
            <li>use the website to create competing services or for unlawful model training.</li>
          </ul>
          <p>We may suspend or terminate accounts or access for violations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">7. Intellectual Property</h2>
          <p>
            All rights, title, and interest in and to the website, including its design, content, software, and
            branding, remain the exclusive property of Microlynk LLC and its licensors. Except for the
            limited license granted, nothing in this Agreement transfers intellectual property rights to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">8. Disclaimer of Warranties</h2>
          <p>
            This website is provided “as is” and “as available” without warranties of any kind, express or
            implied, including merchantability, fitness for a particular purpose, or non-infringement. We
            do not warrant that the website will be uninterrupted, error-free, or secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">9. Prohibited Uses</h2>
          <p className="mb-2">You may not use our Service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
            <li>To submit false or misleading information</li>
            <li>To upload or transmit viruses or any other type of malicious code</li>
            <li>To collect or track the personal information of others</li>
            <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
            <li>For any obscene or immoral purpose</li>
            <li>To interfere with or circumvent the security features of the Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">10. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Microlynk LLC, its officers, employees, and affiliates
            shall not be liable for any indirect, incidental, consequential, special, or punitive damages, or
            any loss of profits, revenues, data, or goodwill.
          </p>
          <p className="mb-2">Our total liability for any claim shall not exceed the greater of:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>(i) USD $100, or</li>
            <li>(ii) the amount paid by you to the Company in the twelve (12) months preceding the event giving rise to the claim.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">11. Dispute Resolution Procedure</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Mediation:</strong> The parties shall attempt to resolve disputes through good-faith mediation for at least 30 days.</li>
            <li><strong>Arbitration:</strong> If unresolved, disputes shall be finally settled by binding arbitration administered under recognized commercial arbitration rules, with one arbitrator appointed in accordance with such rules. The Company shall bear arbitration administrative costs, except where deemed excessive or unconscionable by the arbitrator, in which case costs will be fairly allocated. Each party shall bear its own legal fees unless otherwise awarded.</li>
            <li><strong>Litigation Carve-Out:</strong> Notwithstanding the above, either party may bring an action in a court of competent jurisdiction for equitable or injunctive relief, including protection of intellectual property or confidential information, while other disputes proceed through arbitration.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">12. Termination</h2>
          <p>
            We may suspend or terminate your access at any time, with or without cause, upon notice.
            Upon termination, your right to use the website shall immediately end.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">13. DMCA Notice and Takedown Policy</h2>
          <p className="mb-4">
            We respect the intellectual property rights of others. It is our policy to respond to any claim
            that Content posted on the Service infringes the copyright or other intellectual property
            infringement of any person.
          </p>
          <p>
            If you are a copyright owner, or authorized on behalf of one, and you believe that the
            copyrighted work has been copied in a way that constitutes copyright infringement that is
            taking place on the Service, you must submit your notice in writing to the attention of our
            copyright agent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">14. Privacy Policy</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy, which also governs your
            use of the Service, to understand our practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">15. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
            revision is material, we will try to provide at least 30 days notice prior to any new terms
            taking effect.
          </p>
          <p>
            What constitutes a material change will be determined at our sole discretion. By continuing
            to access or use our Service after those revisions become effective, you agree to be bound
            by the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">16. Entire Agreement</h2>
          <p>
            These Terms constitute the sole and entire agreement between you and Microlynk regarding
            the Service and supersede all prior and contemporaneous understandings, agreements,
            representations, and warranties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-backgroundDarkBlue mb-4 font-regular">17. Contact Information</h2>
          <p className="mb-2">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:contact@microlynk.com" className="text-backgroundLightBlue hover:underline">contact@microlynk.com</a></li>
            <li><strong>Website:</strong> <a href="https://microlynk.vercel.app/" className="text-backgroundLightBlue hover:underline">https://microlynk.vercel.app/</a></li>
          </ul>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}
