"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import store from "@/redux/store";

import HeaderBar from "@/app/components/HeaderBar";
import Intro from "@/app/components/Intro";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          cross-origin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <HeaderBar />
        <Intro />
        <FooterBar />
      </body>
    </html>
  );
}
