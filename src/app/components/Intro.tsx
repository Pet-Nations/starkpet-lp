import Image from "next/image";
import { useState, useEffect } from "react";

import "@/app/assets/styles/intro.scss";
import intro from "@/app/assets/images/intro/intro-img.svg";
import intro_mobile from "@/app/assets/images/intro/intro-img-mobile.png";

export default function Intro() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="intro">
      {screenWidth <= 614 ? (
        <>
          <div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
          </div>
          <Image src={intro_mobile} width={350} height={498} alt="intro" />
        </>
      ) : (
        <>
          <div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
            <div>Pet nations labs</div>
          </div>
          <Image src={intro} width={709} height={655} alt="intro" />
        </>
      )}
    </div>
  );
}
