import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://migomesnaildesigner.com.br"),
  title: {
    default: "Mi Gomes Nail Designer | Unhas impecáveis em Americana - SP",
    template: "%s | Mi Gomes Nail Designer",
  },
  description:
    "Mi Gomes Nail Designer oferece manicure, nail art, alongamento e cuidados para unhas em Americana, SP. Agende seu horário com estilo, sofisticação e profissionalismo.",
  keywords: [
    "Mi Gomes Nail Designer",
    "manicure Americana SP",
    "nail designer Americana",
    "alongamento de unhas Americana",
    "nail art Americana",
    "esmalteria Americana",
    "unhas impecáveis",
    "salão de beleza Americana SP",
    "beauty salon Americana SP",
    "manicura Americana",
  ],
  applicationName: "Mi Gomes Nail Designer",
  authors: [{ name: "Mi Gomes Nail Designer" }],
  creator: "Mi Gomes Nail Designer",
  publisher: "Mi Gomes Nail Designer",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/gallery/logoNail.svg",
    shortcut: "/gallery/logoNail.svg",
    apple: "/gallery/logoNail.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Mi Gomes Nail Designer",
    title: "Mi Gomes Nail Designer | Unhas impecáveis em Americana - SP",
    description:
      "Manicure, nail art e unhas impecáveis com atendimento personalizado em Americana, SP.",
    url: "/",
    images: [
      {
        url: "/gallery/logoNail.png",
        width: 1200,
        height: 630,
        alt: "Mi Gomes Nail Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Gomes Nail Designer | Unhas impecáveis em Americana - SP",
    description:
      "Manicure, nail art e unhas impecáveis com atendimento personalizado em Americana, SP.",
    images: ["/gallery/logoNail.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
