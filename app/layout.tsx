import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amerta Fisioterapi & Wellness | Terapi Nyeri, Cedera & Rehabilitasi",
  description:
    "Amerta Fisioterapi & Wellness menyediakan layanan fisioterapi profesional untuk mengatasi nyeri, cedera olahraga, rehabilitasi pasca operasi, serta membantu meningkatkan mobilitas dan kualitas hidup melalui terapi yang dipersonalisasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
