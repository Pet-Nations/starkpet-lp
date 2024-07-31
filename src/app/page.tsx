"use client";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";

import HeaderBar from "@/app/components/HeaderBar";
import Strategic from "@/app/components/Strategic";
import Intro from "@/app/components/Intro";
import OurProjects from "@/app/components/OurProjects";
import FooterBar from "@/app/components/FooterBar";
import HeaderBar1 from "@/app/components/HeaderBar1";

export default function Home() {
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
    <main className="">
      <header></header>
      <div className="background"></div>
      <HeaderBar onClickNav={scrollTo} />
      <Intro />
      <Strategic scroll={strategic} />
      <OurProjects scroll={projects} />
      <FooterBar />
    </main>
  );
}
