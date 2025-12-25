import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing · Plans for every developer",
    description: "Free for individuals and small teams. Enterprise-grade security for large organizations. Unlimited public/private repositories.",
    keywords: ["pricing", "free git", "team plan", "enterprise", "ci/cd minutes", "github pricing", "cost"],
};

export default function Pricing() {
    return (
        <div className="pricing-container">
            <h1 className="pricing-title">Get the complete platform.</h1>

            <div className="plans-grid">
                <div className="plan-card">
                    <h2>Free</h2>
                    <p className="price">$0</p>
                    <ul>
                        <li>Unlimited public/private repositories</li>
                        <li>2,000 CI/CD minutes/month</li>
                        <li>500MB of Packages storage</li>
                        <li>Community Support</li>
                    </ul>
                    <button className="plan-btn">Join for free</button>
                </div>

                <div className="plan-card featured">
                    <h2>Team</h2>
                    <p className="price">$4</p>
                    <ul>
                        <li>Everything in Free</li>
                        <li>3,000 CI/CD minutes/month</li>
                        <li>2GB of Packages storage</li>
                        <li>Code owners</li>
                        <li>Draft Pull Requests</li>
                    </ul>
                    <button className="plan-btn primary">Continue with Team</button>
                </div>

                <div className="plan-card">
                    <h2>Enterprise</h2>
                    <p className="price">$21</p>
                    <ul>
                        <li>Everything in Team, plus...</li>
                        <li>SAML single sign-on</li>
                        <li>Audit logs</li>
                        <li>GitHub Connect</li>
                        <li>Premium Support</li>
                    </ul>
                    <button className="plan-btn">Start a free trial</button>
                </div>
            </div>

        </div>
    );
}
