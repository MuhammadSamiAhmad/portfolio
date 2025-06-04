import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Importing Mona Sans variable font
// This font is used for the entire application, providing a clean and modern look.
// The font files are stored in the app/fonts directory.
// The variable font includes both normal and italic styles, allowing for flexible typography.
// The font is loaded with a weight of 400 for both normal and italic styles, ensuring consistency across the application.
// you can customize the font weight and style as needed by modifying the `weight` and `style` properties in the `src` array.
// The `variable` property allows the font to be used as a variable font, enabling dynamic adjustments to weight and style in CSS.
// The metadata includes the title, description, keywords, and author information, enhancing the discoverability of the application.
// The metadata also includes Open Graph tags for better integration with social media platforms, improving link previews and engagement.
// The layout component wraps the entire application, ensuring that the font is applied consistently across all pages.
// The `RootLayout` component is the main layout for the application, providing a consistent structure for all pages.
const monaSans = localFont({
  src: [
    {
      path: "/fonts/MonaSans-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/MonaSans-Italic-VariableFont_wdth,wght.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Sami | Frontend Developer",
    template: "%s | Muhammad Sami",
  },
  description:
    "Muhammad Sami is a frontend developer passionate about building clean, interactive web experiences. Explore his portfolio, projects, and technical skills.",
  metadataBase: new URL("https://muhammadsami.vercel.app"),
  openGraph: {
    title: "Muhammad Sami | Frontend Developer",
    description:
      "Explore the portfolio of Muhammad Sami, a frontend developer skilled in React, Next.js, and modern web technologies.",
    url: "https://muhammadsami.vercel.app",
    siteName: "Muhammad Sami Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Muhammad Sami",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Personal Website",
  ],
  authors: [
    {
      name: "Muhammad Sami",
      url: "https://muhammadsami.vercel.app",
    },
  ],
  creator: "Muhammad Sami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
