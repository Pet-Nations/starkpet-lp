import "@/app/assets/styles/strategic.scss";
import AboutUs from "@/app/components/strategic/AboutUs";
import Diversify from "@/app/components/strategic/Diversify";
import System from "@/app/components/strategic/System";
import productionImg from "@/app/assets/images/strategic/production/img.png";
import productionImgActive from "@/app/assets/images/strategic/production/img-active.png";
import deepImg from "@/app/assets/images/strategic/deep/img.png";
import deepImgActive from "@/app/assets/images/strategic/deep/img-active.png";
import tractionImg from "@/app/assets/images/strategic/tractions/img.svg";
import tractionImgActive from "@/app/assets/images/strategic/tractions/img-active.svg";
import Image from "next/image";
import { useState } from "react";

interface StrategicItemProps {
    img: any;
    imgActive: any;
    title: string;
    text: string;
}

const StrategicItem: React.FC<StrategicItemProps> = ({ img, imgActive, title, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="strategic-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={isHovered ? imgActive : img} alt={title} />
            <div className="content">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default function Strategic() {
    const strategicGroup3 = [
        {
            img: productionImg,
            imgActive: productionImgActive,
            title: "Production diversify",
            text: "Never top in ideas, the Pet Nations Lab bring all potential ideas on web3."
        },
        {
            img: deepImg,
            imgActive: deepImgActive,
            title: "Deep RnD",
            text: "The Pet Nations Lab always try to focus and follow the market to make sure RnD is foresight."
        },
        {
            img: tractionImg,
            imgActive: tractionImgActive,
            title: "Tractions blackhole",
            text: "Bring all tractions with awareness from the power of lab productions."
        }
    ];

    return (
        <div className="strategic">
            <div className="strategic-group-1">
                <AboutUs />
                <Diversify />
            </div>
            <div className="strategic-group-2">
                <System />
            </div>
            <div className="strategic-group-3">
                {strategicGroup3.map((item, index) => (
                    <StrategicItem
                        key={index}
                        img={item.img}
                        imgActive={item.imgActive}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
