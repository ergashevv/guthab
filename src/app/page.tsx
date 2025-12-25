export default function Home() {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <h1 className="hero-text">its not Github bro</h1>
        <p className="sub-text">But it looks familiar, doesn&apos;t it?</p>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <span>&copy; 2024 Guthab, Inc.</span>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <a href="#">Docs</a>
          <a href="#">Contact GitHub</a>
          <a href="#">Pricing</a>
          <a href="#">API</a>
        </div>
      </footer>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Guthab?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Guthab is a development platform inspired by the world's leading software hub, focused on simplicity and speed."
                }
              },
              {
                "@type": "Question",
                "name": "Is it free to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, public repositories are free forever. We also offer paid plans for teams and enterprises."
                }
              },
              {
                "@type": "Question",
                "name": "How does it compare to GitHub?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide a familiar interface with optimized performance for specific local workflows."
                }
              }
            ]
          }),
        }}
      />
    </main>
  );
}
