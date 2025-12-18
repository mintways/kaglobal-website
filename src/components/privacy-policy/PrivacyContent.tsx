// components/policies/PrivacyContent.tsx
import PrivacySection from "./PrivacySection";

export default function PrivacyContent() {
    return (
        <div>
            <PrivacySection id="introduction" heading="1. Introduction">
                <p>
                    KA Global IP (“Company”, “we”, “us”) respects your privacy. This Policy describes how we process
                    personal information when you visit our websites, use our platforms (including filing,
                    renewals and recordals), or otherwise interact with us.
                </p>
                <p>
                    By using our services, you agree to the practices described here. If you do not agree, please
                    do not use our services.
                </p>
            </PrivacySection>

            <PrivacySection id="data-we-collect" heading="2. Data We Collect">
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <span className="font-semibold">Contact data:</span> name, email address, phone number, company, job title.
                    </li>
                    <li>
                        <span className="font-semibold">Account & usage data:</span> login information, activity logs, preferences.
                    </li>
                    <li>
                        <span className="font-semibold">Transaction data:</span> orders, invoices, payment status (processed by PCI-compliant processors).
                    </li>
                    <li>
                        <span className="font-semibold">Technical data:</span> IP address, device/browser type, pages viewed, referrers, cookies.
                    </li>
                    <li>
                        <span className="font-semibold">IP portfolio data:</span> matter details you upload or share for service delivery.
                    </li>
                </ul>
            </PrivacySection>

            <PrivacySection id="how-we-use" heading="3. How We Use Data">
                <ul className="list-disc pl-5 space-y-2">
                    <li>Provide and improve our services and platforms.</li>
                    <li>Respond to inquiries, provide support, and manage accounts.</li>
                    <li>Process orders, renewals, filings, and related transactions.</li>
                    <li>Detect, prevent, and address security or fraud issues.</li>
                    <li>Comply with legal obligations and enforce our agreements.</li>
                    <li>Send service communications and, where permitted, marketing updates (you can opt out anytime).</li>
                </ul>
            </PrivacySection>

            <PrivacySection id="legal-bases" heading="4. Legal Bases (EEA/UK)">
                <p>Where GDPR/UK GDPR applies, we rely on these legal bases:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-semibold">Contract:</span> to deliver services you request.</li>
                    <li><span className="font-semibold">Legitimate interests:</span> e.g., to secure our services and improve them.</li>
                    <li><span className="font-semibold">Consent:</span> for certain marketing and cookies; you can withdraw anytime.</li>
                    <li><span className="font-semibold">Legal obligation:</span> to comply with applicable laws.</li>
                </ul>
            </PrivacySection>

            <PrivacySection id="sharing" heading="5. Sharing & International Transfers">
                <p>
                    We may share data with service providers (e.g., hosting, analytics, customer support, payment
                    processors) under appropriate data protection terms. Where data is transferred internationally,
                    we use lawful transfer mechanisms (e.g., SCCs) where required.
                </p>
                <p>
                    We do not sell personal information. We may disclose information to comply with law, protect
                    rights, or in connection with a business transaction (e.g., merger).
                </p>
            </PrivacySection>

            <PrivacySection id="security" heading="6. Security">
                <p>
                    We implement administrative, technical, and physical safeguards designed to protect personal information.
                    No method of transmission or storage is 100% secure, but we continually enhance our controls.
                </p>
            </PrivacySection>

            <PrivacySection id="retention" heading="7. Data Retention">
                <p>
                    We retain personal information as long as needed for the purposes described, to comply with legal
                    obligations, resolve disputes, and enforce agreements. Retention periods vary by data category and context.
                </p>
            </PrivacySection>

            <PrivacySection id="your-rights" heading="8. Your Rights">
                <p>
                    Depending on your location, you may have rights to access, correct, delete, or port your data; object or
                    restrict processing; and withdraw consent. To exercise rights, contact{" "}
                    <a href="mailto:support@kaglobalip.com" className="underline underline-offset-2">
                        support@kaglobalip.com
                    </a>.
                </p>
                <p>
                    If we cannot resolve your concern, you may have the right to complain to your local data protection authority.
                </p>
            </PrivacySection>

            <PrivacySection id="cookies" heading="9. Cookies & Similar Technologies">
                <p>
                    We use cookies and similar technologies to operate our sites, remember preferences, and analyze traffic.
                    You can control cookies through your browser settings and (where implemented) our cookie banner.
                </p>
            </PrivacySection>

            <PrivacySection id="children" heading="10. Children’s Privacy">
                <p>
                    Our services are not directed to children under 16. If you believe a child provided us personal information,
                    please contact us and we will take appropriate steps to remove it.
                </p>
            </PrivacySection>

            <PrivacySection id="changes" heading="11. Changes to this Policy">
                <p>
                    We may update this Policy from time to time. We will change the “Last updated” date and, where required,
                    provide additional notice.
                </p>
            </PrivacySection>

            <PrivacySection id="contact" heading="12. Contact Us">
                <p>
                    Questions about this Policy? Email us at{" "}
                    <a href="mailto:support@kaglobalip.com" className="underline underline-offset-2">
                        support@kaglobalip.com
                    </a>{" "}
                    or write to KA Global IP (India/US offices).
                </p>
            </PrivacySection>
        </div>
    );
}
