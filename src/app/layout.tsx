import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "satya | portfolio",
  description: "portfolio of ida bagus satya mahendra, frontend web developer, web developer",
};


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',  // <--------- 👈
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
