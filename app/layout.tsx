import "./globals.css";

export const metadata = {
  title: "Gurunadh Kothuru | AI Engineer",
  description: "AI Engineer specializing in ML, DL, NLP and Research"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}