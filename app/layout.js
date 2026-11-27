
import "./globals.css";

export const metadata = {
  title: "Bazaar Tailor",
  description: "Tailor Order Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>Bazaar Tailor</h1>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <p>Roll Number: 247237</p>
        </footer>
      </body>
    </html>
  );
}
