import type { Metadata } from "next";
import "./globals.css";
import LayoutClient from "@/context/LayoutClient";
import { Figtree } from "next/font/google";

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
    <html lang="en" className={figtree.variable}>
      <body className="font-sans bg-[linear-gradient(120deg,#eaf4ff_0%,#f5f9ff_40%,#eef2ff_100%)] ">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}