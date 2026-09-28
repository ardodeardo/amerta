import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amerta Fisioterapi & Wellness | Terapi Nyeri, Cedera & Rehabilitasi",
  description:
    "Amerta Fisioterapi & Wellness menyediakan layanan fisioterapi profesional untuk mengatasi nyeri, cedera olahraga, rehabilitasi pasca operasi, serta membantu meningkatkan mobilitas dan kualitas hidup melalui terapi yang dipersonalisasi.",
  alternates: {
    canonical: "https://www.amertafisioterapi.com",
  },
  openGraph: {
    title:
      "Amerta Fisioterapi & Wellness | Terapi Nyeri, Cedera & Rehabilitasi",
    description:
      "Amerta Fisioterapi & Wellness menyediakan layanan fisioterapi profesional untuk mengatasi nyeri, cedera olahraga, rehabilitasi pasca operasi, serta membantu meningkatkan mobilitas dan kualitas hidup melalui terapi yang dipersonalisasi.",
    url: "https://www.amertafisioterapi.com",
    siteName:
      "Amerta Fisioterapi & Wellness | Terapi Nyeri, Cedera & Rehabilitasi",
    images: [
      {
        url: "/image/hero/hero--desktop.jpg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("h-full", "antialiased", jakarta.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
