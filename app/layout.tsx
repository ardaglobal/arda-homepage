import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const SFTSchrifted = localFont({
  src: [
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-DemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/sft-schrifted-sans-font/SFTSchriftedSansTRIAL-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
  ],
})

export const metadata: Metadata = {
  title: "ARDA",
  description: "Private Markets Reprogrammed",
  openGraph: {
    title: "ARDA",
    description: "Private Markets Reprogrammed",
    images: [
      {
        url: "/arda-icon.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARDA",
    description: "Private Markets Reprogrammed",
    images: ["/arda-icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFTSchrifted.className} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
