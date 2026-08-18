import type { Metadata } from "next";
import HomePage from "@/features/home/components/HomePage/HomePage";

export const metadata: Metadata = {
  title: "Brandinglift | Digital Solutions, AI & Business Growth",
  description:
    "Brandinglift helps businesses grow through web development, digital marketing, AI solutions, automation, branding, and innovative technology. Meet LiftBot, our AI employee platform.",
  keywords: [
    "digital marketing agency",
    "web development company",
    "AI solutions",
    "AI automation",
    "AI employee",
    "business automation",
    "software development",
    "digital transformation",
    "Brandinglift",
    "LiftBot AI",
  ],
};

export default function Home() {
  return <HomePage />;
}