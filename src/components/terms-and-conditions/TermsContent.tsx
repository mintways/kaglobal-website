// components/policies/TermsContent.tsx
import TermsSection from "./TermsSection";

export default function TermsContent() {
    return (
        <div>
            <TermsSection id="introduction" heading="1. Introduction">
                <p>
                    These Terms of Service (“Terms”) govern your use of the websites, platforms, and services
                    provided by KA Global IP (“we,” “our,” or “us”). By accessing or using our services, you
                    agree to be bound by these Terms and our Privacy Policy.
                </p>
            </TermsSection>

            <TermsSection id="acceptance" heading="2. Acceptance of Terms">
                <p>
                    By using our websites or services, you confirm that you are of legal age and have the
                    authority to enter into this agreement. If you do not agree with these Terms, you must not
                    use our services.
                </p>
            </TermsSection>

            <TermsSection id="services" heading="3. Our Services">
                <p>
                    KA Global IP provides intellectual property and corporate advisory services, including
                    filings, renewals, research, analytics, and related consulting. We reserve the right to
                    modify, suspend, or discontinue any part of the services at our discretion.
                </p>
            </TermsSection>

            <TermsSection id="user-obligations" heading="4. User Obligations">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide accurate, current, and complete information when using our services.</li>
                    <li>Use the services only for lawful purposes.</li>
                    <li>
                        Refrain from copying, reselling, or exploiting our content, databases, or systems without
                        permission.
                    </li>
                    <li>Maintain confidentiality of account credentials and promptly report unauthorized use.</li>
                </ul>
            </TermsSection>

            <TermsSection id="intellectual-property" heading="5. Intellectual Property">
                <p>
                    All content, data, logos, and trademarks on our platforms are owned by KA Global IP or its
                    licensors. Use of our intellectual property requires prior written consent. You retain
                    ownership of materials you provide to us, but grant us a limited license to use them for
                    service delivery.
                </p>
            </TermsSection>

            <TermsSection id="payment" heading="6. Fees and Payments">
                <p>
                    Fees are displayed in the applicable currency on our platform and are due as specified in
                    your invoice or order confirmation. You agree to pay all charges using the selected
                    payment method. Taxes and transaction fees may apply.
                </p>
            </TermsSection>

            <TermsSection id="confidentiality" heading="7. Confidentiality">
                <p>
                    Both parties agree to maintain the confidentiality of non-public information obtained in
                    connection with the services. Confidential information will not be disclosed to third
                    parties except as required by law or with prior consent.
                </p>
            </TermsSection>

            <TermsSection id="limitations" heading="8. Limitation of Liability">
                <p>
                    To the maximum extent permitted by law, KA Global IP and its affiliates will not be liable
                    for indirect, incidental, or consequential damages arising from your use of the services.
                    Our total liability is limited to the amount paid by you for the service that gave rise to
                    the claim.
                </p>
            </TermsSection>

            <TermsSection id="termination" heading="9. Termination">
                <p>
                    We may suspend or terminate your access to services if you violate these Terms or any
                    applicable laws. Upon termination, you remain responsible for outstanding payments and any
                    obligations incurred prior to termination.
                </p>
            </TermsSection>

            <TermsSection id="governing-law" heading="10. Governing Law">
                <p>
                    These Terms are governed by the laws of India, without regard to conflict of law
                    principles. Disputes will be subject to the exclusive jurisdiction of the courts in New
                    Delhi, India, unless otherwise agreed.
                </p>
            </TermsSection>

            <TermsSection id="changes" heading="11. Changes to Terms">
                <p>
                    We may revise these Terms from time to time. Updated versions will be posted on our
                    website, and the “Last Updated” date will reflect the latest revision. Continued use of
                    our services after changes constitutes acceptance.
                </p>
            </TermsSection>

            <TermsSection id="contact" heading="12. Contact Us">
                <p>
                    For any questions about these Terms, contact us at{" "}
                    <a href="mailto:support@kaglobalip.com" className="underline underline-offset-2">
                        support@kaglobalip.com
                    </a>{" "}
                    or reach out through our{" "}
                    <a href="/contact" className="underline underline-offset-2">
                        Contact page
                    </a>.
                </p>
            </TermsSection>
        </div>
    );
}
