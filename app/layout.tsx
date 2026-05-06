import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/context/LayoutClient";
import { Figtree } from "next/font/google";
import { Toaster } from "react-hot-toast";
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "EduTech",
  description: "Modern learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans bg-gradient-to-br from-light via-white to-primary-light ">
         <Toaster
    position="top-center"
  />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}