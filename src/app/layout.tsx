"use client";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";

import HeaderBar from "@/app/components/HeaderBar";
import Strategic from "@/app/components/Strategic";
import FooterBar from "@/app/components/FooterBar";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Inferix Node Sale</title>
        <meta name="description" content="Inferix Node Sale" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true}/>
          <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <HeaderBar />
        <Strategic/>
        <FooterBar />
      </body>
    </html>
  );
}
