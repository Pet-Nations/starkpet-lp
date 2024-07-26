import "@/app/assets/styles/strategic.scss";
import AboutUs from "@/app/components/strategic/AboutUs";
import Diversify from "@/app/components/strategic/Diversify";
import System from "@/app/components/strategic/System";
import productionImg from "@/app/assets/images/strategic/production/img.png";
import productionImgActive from "@/app/assets/images/strategic/production/img-active.png";
import deepImg from "@/app/assets/images/strategic/deep/img.png";
import deepImgActive from "@/app/assets/images/strategic/deep/img-active.png";
import tractionImg1 from "@/app/assets/images/strategic/tractions/img_1.png";
import tractionImg2 from "@/app/assets/images/strategic/tractions/img_2.png";
import tractionImg3 from "@/app/assets/images/strategic/tractions/img_3.png";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface StrategicItemProps {
  img: any;
  imgActive: any;
  title: string;
  text: string;
}

const StrategicItem: React.FC<StrategicItemProps> = ({
  img,
  imgActive,
  title,
  text,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="strategic-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className="single-img"
        src={isHovered ? imgActive : img}
        alt={title}
      />
      <div className="content">
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function Strategic({ scroll }) {
  const about_us = useRef(null);
  const models = useRef(null);
  useEffect(() => {
    scrollTo(scroll);
  }, [scroll]);

  function scrollTo(ele) {
    if (ele !== "about-us" && ele !== "models") return;
    let element = about_us.current;
    if (ele == "models") element = models.current;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    });
  }

  const strategicGroup3 = [
    {
      img: productionImg,
      imgActive: productionImgActive,
      title: "Production diversify",
      text: "Never top in ideas, the Pet Nations Lab bring all potential ideas on web3.",
    },
    {
      img: deepImg,
      imgActive: deepImgActive,
      title: "Deep RnD",
      text: "The Pet Nations Lab always try to focus and follow the market to make sure RnD is foresight.",
    },
  ];

  return (
    <div className="strategic">
      <div ref={about_us} className="strategic-group-1">
        <AboutUs />
        <Diversify />
      </div>
      <div className="strategic-group-2">
        <System />
      </div>
      <div ref={models} className="strategic-group-3">
        {strategicGroup3.map((item, index) => (
          <StrategicItem
            key={index}
            img={item.img}
            imgActive={item.imgActive}
            title={item.title}
            text={item.text}
          />
        ))}
        <div className="strategic-item">
          <div className="container-img">
            <Image src={tractionImg1} alt="tractionImg1" />
            <Image src={tractionImg2} alt="tractionImg2" />
            <Image src={tractionImg3} alt="tractionImg3" />
          </div>
          <div className="content">
            <span>Tractions blackhole</span>
            <p>
              Bring all tractions with awareness from the power of lab
              productions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
