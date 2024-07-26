"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useRef, useEffect, useState } from "react";
import store from "@/redux/store";
import Image from "next/image";

import background from "@/app/assets/images/background.png";

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
  const [strategic, setStrategic] = useState("");
  const [projects, setProjects] = useState(false);

  function scrollTo(nav: string) {
    if (nav == "home") window.scrollTo({ top: 0, behavior: "smooth" });
    if (nav == "projects") setProjects(true);
    else setProjects(false);
    if (nav == "models" || nav == "about-us") setStrategic(nav);
    else setStrategic("");
  }

  return (
    <html lang="en">
      <head>
        <title>Stark Net</title>
        <meta name="description" content="Stark Net LandingPage" />
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
      <body className={inter.className + " container-stark"}>
        <div className="background"></div>
        <HeaderBar onClickNav={scrollTo} />
        <Intro />
        <Strategic scroll={strategic} />
        <OurProjects scroll={projects} />
        <FooterBar />
      </body>
    </html>
  );
}
