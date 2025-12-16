import { OverlayProvider } from '../components/mine/OverlayProvider';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yazdan Tech | Full-Stack Web Developer & Web Applications",
  description:
    "Full-stack web developer building fast, scalable, and modern web applications using Next.js, Django, and clean architecture. Available worldwide.",
  metadataBase: new URL("https://yazdantech.com"),
  openGraph: {
    title: "Yazdan Tech | Full-Stack Web Developer & Web Applications",
    description:
      "Full-stack web developer building fast, scalable, and modern web applications using Next.js, Django, and clean architecture. Available worldwide.",
    url: "https://yazdantech.com",
    siteName: "Yazdan Tech",
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OverlayProvider>
          {children}
        </OverlayProvider>
      </body>
    </html>
  );
}
