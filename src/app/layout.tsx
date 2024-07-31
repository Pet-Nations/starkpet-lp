"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

// export const metadata: Metadata = {
//   title: "Pet Labs by Pet Nations",
//   description:
//     "Lab, build all productions from Pet Nations. Ensure the stability of Pet Nations ecosystem",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Pet Labs by Pet Nations</title>
        <meta name="description" content="Lab, build all productions from Pet Nations. Ensure the stability of Pet Nations ecosystem"/>
        <meta property="og:image" content="https://labs.petnations.io/petlabs_02.jpg" />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

      </head>
      <body className={inter.className + " container-stark"}>{children}</body>
    </html>
  );
}
