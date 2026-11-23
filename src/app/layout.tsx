import type { Metadata } from "next";
import "./globals.css";

const title = "Microlynk | Embedded Systems & IoT Solutions";
const description =
  "Microlynk builds connected systems through embedded engineering, hardware and PCB design, advanced firmware, and IoT cloud integration.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Microlynk",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
