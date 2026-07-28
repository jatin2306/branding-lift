import type { Metadata } from "next";
import { Suspense } from "react";
import { Outfit } from "next/font/google";
import GoogleAnalytics from "@/lib/analytics/GoogleAnalytics";
import GoogleAnalyticsPageView from "@/lib/analytics/GoogleAnalyticsPageView";
import { siteConfig } from "@/lib/config/siteConfig";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
  description: siteConfig.hero.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-full antialiased">
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
