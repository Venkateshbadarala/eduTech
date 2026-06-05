import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/context/LayoutClient";
import { Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
import logo from '@/app/logo.png';
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Cornixe",
  description: "Modern learning platform",
  icons: {
    icon: [
      { url: logo.src, sizes: "32x32", type: "image/png" },
      { url: logo.src, sizes: "192x192", type: "image/png" },
      { url: logo.src, sizes: "512x512", type: "image/png" },
    ],
    apple: {
      url: logo.src,
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans bg-gradient-to-r from-primary/20 via-white to-primary/10">
       <Toaster position="top-center"/>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
