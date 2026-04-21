import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Sale",
  description: `Terms and conditions governing orders and use of ${SITE.name} thermal modifications.`,
};

// TODO(legal): These terms are a plain-English draft intended as a starting
// point. Every section marked with TODO(legal) depends on facts specific to
// your business (legal entity, jurisdiction, warranty, returns policy) and
// must be filled in before launch. Then have the full document reviewed by
// counsel familiar with your jurisdiction's consumer-protection law (e.g.
// the FTC Magnuson-Moss Warranty Act and UCC Article 2 in the US, or the
// Consumer Rights Act 2015 and Distance Selling rules in the UK/EU).
const LAST_UPDATED = "April 21, 2026";

export default function TermsPage() {
  return (
    <section className="py-20 bg-ice-surface min-h-[80vh]">
      <Container className="max-w-3xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Terms of Sale</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </header>

        <article className="max-w-none space-y-8 text-slate-700 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">1. About these terms</h2>
            <p>
              These Terms of Sale (&ldquo;Terms&rdquo;) govern your use of {SITE.domain} and any purchase of
              {" "}{SITE.name} products. By submitting an order request or placing an order, you agree to
              these Terms. If you do not agree, please do not submit a request or place an order.
            </p>
            {/* TODO(legal): insert the full legal entity name, its form (LLC / Ltd / GmbH / etc.), its registered address, and any company registration or tax identification number required in your jurisdiction. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Orders are inquiries, not contracts</h2>
            <p>
              The order form on {SITE.domain} is a <strong>request to order</strong>, not an instant
              checkout. Submitting the form does not create a binding contract between you and us.
            </p>
            <p className="mt-3">A contract is formed only when all of the following have occurred:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We confirm your request by email, including the final price, shipping, and taxes;</li>
              <li>You accept that quote in writing; and</li>
              <li>We receive payment in cleared funds.</li>
            </ul>
            <p className="mt-3">
              Until all three happen, either side may decline to proceed for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Pricing, payment, and taxes</h2>
            <p>
              Prices shown on {SITE.domain} are in US dollars and exclude shipping, duties, and any
              applicable sales tax or VAT. The final price in our confirmation email is the price that
              governs your order.
            </p>
            <p className="mt-3">
              We accept the payment methods listed in the confirmation email. You are responsible for any
              import duties, customs fees, or taxes levied by your jurisdiction on delivery.
            </p>
            {/* TODO(legal): list the payment processors you use (Stripe, PayPal, etc.), note whether prices are inclusive or exclusive of VAT for EU/UK customers, and state your business's tax registration status (e.g., US sales tax nexus states, UK VAT number). */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Shipping and delivery</h2>
            <p>
              We ship to destinations confirmed in our order confirmation email. Estimated delivery windows
              are based on carrier information and are not guaranteed. Risk of loss and title pass to you on
              delivery to the carrier; please inspect your shipment promptly and report damage within 7
              days of receipt.
            </p>
            {/* TODO(legal): name the carrier(s) you use, the regions you ship to, and the typical lead time. If you ship internationally, state whether delivery is DAP (customer pays duties) or DDP (you pay duties). */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Returns and refunds</h2>
            <p>
              You may return an unopened, unused product in its original packaging within{" "}
              <strong>14 days</strong> of delivery for a refund of the product price. The refund excludes
              original shipping; return shipping is at your cost unless the product was faulty or incorrectly
              supplied.
            </p>
            <p className="mt-3">
              Products that have been installed, partially installed, or show signs of attempted
              installation are not returnable, because the thermal pad and heatsink interface are
              single-use once applied. Faulty or incorrectly supplied products remain covered by the
              warranty in Section 6 regardless.
            </p>
            <p className="mt-3">
              To start a return, email{" "}
              <a className="text-sky-600 underline" href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
              {" "}with your order reference and reason.
            </p>
            {/* TODO(legal): if you sell into the EU/UK, the distance-selling right to withdraw is 14 days minimum and cannot be waived. Confirm the window matches what you can actually honour and add a withdrawal form link if required by your jurisdiction. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">6. Product warranty</h2>
            <p>
              We warrant that our products are free from defects in materials and workmanship under normal
              use for a period of <strong>12 months</strong> from delivery. If a covered defect appears in
              that period, we will, at our option, replace the product or refund the purchase price. This
              warranty does not cover damage caused by incorrect installation, misuse, liquid damage, or
              normal wear of the thermal interface over time.
            </p>
            <p className="mt-3">
              This warranty is in addition to any non-excludable statutory rights you may have under the
              consumer-protection law of your jurisdiction.
            </p>
            {/* TODO(legal): confirm the 12-month period matches your actual support capacity. Under the UK Consumer Rights Act 2015 and many EU regimes the statutory period is 2+ years and cannot be waived — adjust accordingly. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">7. Installation is at your risk</h2>
            <p>
              Our products are designed for customer installation inside the MacBook Neo chassis. Installing
              hardware inside a laptop carries inherent risks, including but not limited to damage to the
              logic board, battery, display cable, speakers, or chassis. You are responsible for following
              our published installation instructions carefully and for deciding whether you are comfortable
              performing the installation.
            </p>
            <p className="mt-3">
              If you are not confident performing the installation yourself, we strongly recommend seeking
              assistance from a qualified technician.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">8. Apple warranty disclosure</h2>
            <p>
              Installing third-party hardware inside your MacBook Neo may affect your coverage under
              Apple&rsquo;s Limited Warranty or AppleCare. Apple generally declines to cover damage that it
              attributes to a third-party modification. We are not affiliated with, endorsed by, or
              sponsored by Apple Inc., and &ldquo;MacBook&rdquo; and &ldquo;MacBook Neo&rdquo; are
              trademarks of Apple Inc. used here for compatibility reference only.
            </p>
            <p className="mt-3">
              Before installing, please review Apple&rsquo;s current warranty and AppleCare terms to
              understand what coverage you may be affecting. You should not purchase our products if
              preserving Apple&rsquo;s warranty coverage is more important to you than the performance
              benefit of the modification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">9. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, our total liability to you for any claim arising out
              of or relating to the purchase, installation, or use of our products is limited to the amount
              you paid for the specific product giving rise to the claim.
            </p>
            <p className="mt-3">
              To the fullest extent permitted by law, we are not liable for indirect, incidental,
              consequential, special, or punitive damages &mdash; including but not limited to loss of
              data, loss of use of your laptop, lost profits, or the cost of repair or replacement of your
              laptop &mdash; even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              Nothing in these Terms limits liability for death or personal injury caused by negligence,
              fraud, or any other liability that cannot be limited or excluded under applicable law.
            </p>
            {/* TODO(legal): some jurisdictions (notably the UK/EU for consumer contracts, and several US states) restrict how far liability can be capped or consequential damages excluded. Have this section reviewed before launch. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">10. Intellectual property</h2>
            <p>
              The {SITE.name} name, logo, site design, and product photography are our property or licensed
              to us. You may not copy, reproduce, or use them except as needed to order or review our
              products. Third-party trademarks referenced on this site (including &ldquo;Apple&rdquo;,
              &ldquo;MacBook&rdquo;, and &ldquo;MacBook Neo&rdquo;) are the property of their respective
              owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">11. Governing law and disputes</h2>
            <p>
              These Terms and any dispute arising from them are governed by the laws of{" "}
              <strong>[jurisdiction]</strong>, without regard to conflict-of-laws rules. Any dispute that
              cannot be resolved through good-faith discussion will be brought exclusively in the courts
              of <strong>[venue]</strong>.
            </p>
            {/* TODO(legal): set the governing law (typically the state / country where your legal entity is formed) and the exclusive venue. If you sell to EU/UK consumers, statutory consumer rights in the buyer's country may still apply regardless of this clause. */}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">12. Changes to these terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will update the &ldquo;Last
              updated&rdquo; date above. The Terms in force at the time you submit an order request apply
              to that order; changes do not apply retroactively.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">13. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a className="text-sky-600 underline" href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
            </p>
            {/* TODO(legal): add a postal address and, where required by your jurisdiction, the legal entity's registered agent or service-of-process address. */}
          </section>
        </article>
      </Container>
    </section>
  );
}
