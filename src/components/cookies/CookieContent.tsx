// components/policies/CookieContent.tsx
import CookieSection from "./CookieSection";

export default function CookieContent() {
    return (
        <div>
            <CookieSection id="introduction" heading="1. Introduction">
                <p>
                    KA Global IP (“we”, “us”) uses cookies and similar technologies (collectively, “cookies”)
                    to operate our sites, remember your preferences, analyze traffic, and improve our services.
                    This Policy explains what cookies are, how we use them, and how you can manage your choices.
                </p>
            </CookieSection>

            <CookieSection id="what-are-cookies" heading="2. What Are Cookies?">
                <p>
                    Cookies are small text files stored on your device when you visit a website. They help
                    websites remember information about your visit, such as your preferred language and other
                    settings. “First-party” cookies are set by the site you’re visiting; “third-party”
                    cookies are set by other domains (e.g., analytics or ad partners).
                </p>
            </CookieSection>

            <CookieSection id="types" heading="3. Types of Cookies We Use">
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <span className="font-semibold">Strictly necessary:</span> essential for core
                        functionality (e.g., security, session management). These cannot be switched off in
                        our systems.
                    </li>
                    <li>
                        <span className="font-semibold">Performance/Analytics:</span> help us understand how
                        visitors interact with the site (e.g., page views, load times) so we can improve.
                    </li>
                    <li>
                        <span className="font-semibold">Functional:</span> remember choices (e.g., language,
                        region) and provide enhanced features.
                    </li>
                    <li>
                        <span className="font-semibold">Advertising/Marketing (if used):</span> used to deliver
                        relevant ads and measure marketing effectiveness.
                    </li>
                </ul>
            </CookieSection>

            <CookieSection id="how-we-use" heading="4. How We Use Cookies">
                <ul className="list-disc pl-5 space-y-2">
                    <li>To keep you signed in and maintain session security.</li>
                    <li>To measure usage (e.g., analytics) and improve performance.</li>
                    <li>To remember preferences and personalize certain experiences.</li>
                    <li>
                        If enabled, to support marketing attribution and limit repeated messages (e.g., banners).
                    </li>
                </ul>
            </CookieSection>

            <CookieSection id="choices" heading="5. Your Choices & Controls">
                <p>
                    Where required by law, we present a cookie consent banner to collect your preferences.
                    You can change your choices at any time via our{" "}
                    <a href="#manage" className="underline underline-offset-2">
                        cookie preferences
                    </a>{" "}
                    section (or your browser settings). Note that disabling certain cookies may affect site
                    functionality.
                </p>
            </CookieSection>

            <CookieSection id="manage" heading="6. Managing Cookies in Your Browser">
                <p>
                    Most browsers let you refuse or delete cookies. The following links may help (subject to
                    change by each provider):
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <a
                            href="https://support.google.com/chrome/answer/95647"
                            className="underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Chrome
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                            className="underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Mozilla Firefox
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                            className="underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apple Safari
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                            className="underline underline-offset-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Microsoft Edge
                        </a>
                    </li>
                </ul>
            </CookieSection>

            <CookieSection id="list" heading="7. Cookies We Use (Examples)">
                <p>
                    The specific cookies used may vary over time. Common examples include (non-exhaustive):
                </p>
                <div className="overflow-auto">
                    <table className="mt-3 w-full min-w-[640px] table-auto border-collapse text-left font-ptsans text-[14px]">
                        <thead>
                            <tr className="border-b border-[#EEE] text-[#6B7280]">
                                <th className="py-2 pr-4">Name</th>
                                <th className="py-2 pr-4">Provider</th>
                                <th className="py-2 pr-4">Purpose</th>
                                <th className="py-2 pr-4">Type</th>
                                <th className="py-2">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#374151]">
                            <tr className="border-b border-[#F2F2F2]">
                                <td className="py-2 pr-4">__Secure-Session</td>
                                <td className="py-2 pr-4">KA Global IP</td>
                                <td className="py-2 pr-4">Session authentication & security</td>
                                <td className="py-2 pr-4">First-party, Necessary</td>
                                <td className="py-2">Session</td>
                            </tr>
                            <tr className="border-b border-[#F2F2F2]">
                                <td className="py-2 pr-4">_ga</td>
                                <td className="py-2 pr-4">Google Analytics</td>
                                <td className="py-2 pr-4">Analytics & usage insights</td>
                                <td className="py-2 pr-4">Third-party, Analytics</td>
                                <td className="py-2">13 months (varies)</td>
                            </tr>
                            <tr>
                                <td className="py-2 pr-4">cookie_consent</td>
                                <td className="py-2 pr-4">KA Global IP</td>
                                <td className="py-2 pr-4">Stores user consent preferences</td>
                                <td className="py-2 pr-4">First-party, Functional</td>
                                <td className="py-2">6–12 months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-3">
                    If we add or remove vendors or categories, we’ll update this table and our consent banner.
                </p>
            </CookieSection>

            <CookieSection id="changes" heading="8. Updates to This Policy">
                <p>
                    We may update this Cookie Policy periodically to reflect changes in technology or law.
                    We’ll adjust the “Last updated” date above and, where required, provide additional notice.
                </p>
            </CookieSection>

            <CookieSection id="contact" heading="9. Contact Us">
                <p>
                    Questions about cookies? Email{" "}
                    <a href="mailto:support@kaglobalip.com" className="underline underline-offset-2">
                        support@kaglobalip.com
                    </a>.
                </p>
            </CookieSection>
        </div>
    );
}
