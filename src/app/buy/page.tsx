import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Buy this domain · Premium Asset",
    description: "This premium domain name is available for purchase. Contact the owner specifically via Telegram or Email.",
};

export default function BuyPage() {
    return (
        <div className="buy-container">
            <div className="buy-card">
                <div className="domain-badge">guthab.com</div>
                <h1>This domain is for sale</h1>
                <p className="subtitle">You can acquire this premium asset for your project.</p>

                <div className="contact-methods">
                    <a href="https://t.me/edevz" target="_blank" rel="noopener noreferrer" className="contact-btn telegram">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.4-1.08.39-.35-.01-1.03-.2-1.54-.35-.62-.18-1.1-.28-1.06-.59.02-.16.24-.32.65-.48 2.56-1.11 4.27-1.84 5.13-2.2 2.44-1.01 2.95-1.19 3.28-1.19.07 0 .23.01.33.09.09.08.1.18.1.25 0 .01.01.04 0 .06z" /></svg>
                        Contact via Telegram (@edevz)
                    </a>

                    <a href="mailto:ergashevdev@gmail.com?subject=Domain%20Purchase%20Inquiry" className="contact-btn email">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                        Send an Email
                    </a>
                </div>

                <p className="email-text">ergashevdev@gmail.com</p>
            </div>

            {/* Value Proposition Section for SEO & Conversion */}


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How can I buy the domain guthab.com?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can purchase guthab.com by contacting the owner directly via Telegram (@edevz) or Email (ergashevdev@gmail.com) to negotiate the price and transfer details."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the price of guthab.com?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The price is negotiable. We are open to reasonable offers from serious buyers looking for a premium tech domain."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is the transfer secure?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We can use a secure escrow service (like Escrow.com or Dan.com) to ensure a safe transaction for both parties."
                                }
                            }
                        ]
                    })
                }}
            />

        </div>
    );
}
