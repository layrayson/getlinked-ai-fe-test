import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"
        ></script>
      </head>
      <body className={inter.className + " bg-blueGray-50"}>{children}</body>
    </html>
  );
}
