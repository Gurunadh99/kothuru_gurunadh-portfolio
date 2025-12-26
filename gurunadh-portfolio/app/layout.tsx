export const metadata = {
  title: "Gurunadh Kothuru | AI Engineer Portfolio",
  description: "AI Engineer specializing in ML, DL, NLP and Data Engineering"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}