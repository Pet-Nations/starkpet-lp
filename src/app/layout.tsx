"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderBar from "@/app/components/HeaderBar";
import Content from "@/app/components/Content";
import FooterBar from "@/app/components/FooterBar";
import { Provider } from "react-redux";
import React from "react";
import store from "@/redux/store";

import A from "@/app/components/Stark.tsx";

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
        <A />
      </body>
    </html>
  );
}
