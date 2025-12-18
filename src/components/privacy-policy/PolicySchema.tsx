// components/policies/PolicySchema.tsx
export default function PolicySchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        name: "KA Global IP - Privacy Policy",
        url: "https://www.kaglobalip.com/privacy",
        publisher: {
            "@type": "Organization",
            name: "KA Global IP",
        },
        inLanguage: "en",
        dateModified: "2025-10-01",
    };

    return (
        <script
            type="application/ld+json"
            // @ts-ignore
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
