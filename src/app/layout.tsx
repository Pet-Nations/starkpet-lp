"use client";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import store from "@/redux/store";

import HeaderBar from "@/app/components/HeaderBar";
import Strategic from "@/app/components/Strategic";
import Intro from "@/app/components/Intro";
import OurProjects from "@/app/components/OurProjects";
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
        <title>Stark Net</title>
        <meta name="description" content="Stark Net LandingPage" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <HeaderBar />
        <Intro />
        <Strategic/>
        <OurProjects />
        <FooterBar />
      </body>
    </html>
  );
}
