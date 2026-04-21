import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your personal information.`,
};

// TODO(legal): Replace the placeholder values marked below before launch and
// have this page reviewed by counsel familiar with your jurisdiction (GDPR /
// CCPA / UK-GDPR as applicable).
const LAST_UPDATED = "April 21, 2026";
const RETENTION_MONTHS = 24;

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-ice-surface min-h-[80vh]">
      <Container className="max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </header>

        <article className="prose prose-slate max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Who we are</h2>
            <p>
              &ldquo;{SITE.name}&rdquo; (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates {SITE.domain} and
              offers precision thermal modifications for MacBook Neo devices. This page explains what personal
              information we collect when you use our site, how we use it, and the choices you have.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">What we collect</h2>
            <p>
              We only collect information you submit to us directly through the order request form. That is:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The MacBook Neo model you selected</li>
              <li>The mod (Stage 1, Stage 2, or both) you are interested in</li>
              <li>An optional free-text message</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> set advertising or analytics cookies, and we do not use third-party
              trackers on this site. The only technical data we see is what your browser sends with every
              request (IP address, user-agent) — this is used transiently for rate-limiting abuse of the order
              form and is not retained or associated with your submission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Why we collect it</h2>
            <p>
              The information you submit is used solely to respond to your order request (for example, to
              quote pricing, confirm compatibility, or arrange shipping). The legal basis is our legitimate
              interest in responding to inquiries you initiate, and — where applicable — the steps necessary
              to enter into a contract at your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">How we store it</h2>
            <p>
              Submissions are delivered to our operations mailbox over an encrypted SMTP connection and
              stored in that mailbox. We do not operate a separate customer database for this form. Access is
              limited to staff who need it to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">How long we keep it</h2>
            <p>
              We retain order inquiries for up to {RETENTION_MONTHS} months from the date of last
              correspondence, after which they are deleted from our mailbox. If you reply to us or place an
              order, relevant records may be kept longer to satisfy accounting or warranty obligations.
            </p>
            {/* TODO(legal): confirm the retention window matches your actual practice. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Who we share it with</h2>
            <p>
              We do not sell or rent your personal information. We share it only with service providers
              strictly necessary to deliver the service — currently our SMTP email provider — and only with
              the content of your submission. Those providers are bound by their own confidentiality and
              security obligations.
            </p>
            {/* TODO(legal): list your actual SMTP / email provider by name once finalised. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, export, or delete the
              personal information we hold about you, and to object to or restrict its processing. To
              exercise any of these rights, email us at{" "}
              <a className="text-sky-600 underline" href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>{" "}
              from the address you used when submitting the form. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Security</h2>
            <p>
              The site is served over HTTPS. The order form is rate-limited to deter automated abuse. We
              apply reasonable technical and organisational measures to protect personal information, but no
              method of transmission or storage is perfectly secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Children</h2>
            <p>
              Our site is not directed to children under 16, and we do not knowingly collect personal
              information from them. If you believe a child has submitted personal information, contact us
              and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the &ldquo;Last
              updated&rdquo; date at the top of this page. Material changes will be highlighted on the home
              page for a reasonable period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Contact</h2>
            <p>
              Questions about this policy or your personal information? Email{" "}
              <a className="text-sky-600 underline" href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
            </p>
            {/* TODO(legal): add a postal address and, if required, the name of the controller / data protection representative. */}
          </section>
        </article>
      </Container>
    </section>
  );
}
