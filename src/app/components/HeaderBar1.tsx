import Image from "next/image";
import { useState, useEffect } from "react";

import "@/app/assets/styles/header-bar-1.scss";
import logo from "@/app/assets/images/header/logo.svg";
import d from "@/app/assets/images/header/discord.svg";
import d_light from "@/app/assets/images/header/discord-light.svg";
import y from "@/app/assets/images/header/youtube.svg";
import y_light from "@/app/assets/images/header/youtube-light.svg";
import x from "@/app/assets/images/header/twitter.svg";
import x_light from "@/app/assets/images/header/twitter-light.svg";
import menu from "@/app/assets/images/header/menu.svg";
import close from "@/app/assets/images/header/close-menu.svg";

export default function HeaderBar1({ onClickNav }: any) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        const ele = document.querySelector(
            ".header-bar > .mobile-menu",
        ) as HTMLElement;
        if (!ele) return;

        if (!open) ele.style.right = "-16px";
        else ele.style.right = "-240px";
        setOpen(!open);
    }

    function clickNav(value: string) {
        onClickNav(value);
        if (window.innerWidth <= 768) toggleMenu();
    }
    return (
       <div className="header-bar-1">
           <div className="header-group">
               <div className="group-left">
                   <Image src={logo} alt="logo"/>
                   <div className="menu-item">
                       <span className="item">[ 01 ] Home </span>
                       <span className="item">[ 02 ] About_Us </span>
                       <span className="item">[ 03 ] Our_Model</span>
                       <span className="item">[ 04 ] Our_Projects</span>
                   </div>
               </div>
               <div className="group-right">
                   <a href="https://discord.com/invite/8RnCua96" target="_blank">
                       <Image src={d} alt="d"/>
                       <Image src={d_light} alt="d_light"/>
                   </a>
                   <a href="https://www.youtube.com/channel/UCzYllb_kpUHdzuDKuz1Lylw" target="_blank">
                       <Image src={y} alt="y"/>
                       <Image src={y_light} alt="y_light"/>
                   </a>
                   <a href="https://x.com/pet_nations" target="_blank">
                       <Image src={x} alt="x"/>
                       <Image src={x_light} alt="x_light"/>
                   </a>

               </div>
           </div>
       </div>
    );
}
