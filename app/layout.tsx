import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/basecoats/basecoat.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/basecoats/basecoat-light.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/basecoats/basecoat-bold.ttf",
      weight: "800",
    },
  ],
});

export const metadata: Metadata = {
  title: "Dashboard-Rank your application",
  description: "The dashboard with the graphs and tables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
