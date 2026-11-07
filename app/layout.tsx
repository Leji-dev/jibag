import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Pied from "./Pied";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const titre = "Panier Perdu — Récupère les paniers abandonnés de ta boutique";
const description =
  "Deux e-mails de relance, écrits et envoyés automatiquement pour ta boutique Shopify. 29 € par mois, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jibag.vercel.app"),
  title: titre,
  description,
  openGraph: {
    title: titre,
    description,
    locale: "fr_FR",
    type: "website",
    siteName: "Panier Perdu",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Pied />
        <Analytics />
      </body>
    </html>
  );
}