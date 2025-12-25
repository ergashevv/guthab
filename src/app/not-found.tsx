import Link from "next/link";
import "./globals.css";

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <p>This is not the web page you are looking for.</p>
                <div className="octocat-shadow"></div>
                <Link href="/" className="home-link">Top ga qaytish</Link>
            </div>
        </div>
    );
}
