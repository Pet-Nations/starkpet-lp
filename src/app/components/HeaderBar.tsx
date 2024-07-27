import Image from "next/image";

import "@/app/assets/styles/header-bar.scss";
import logo from "@/app/assets/images/header/logo.svg";
import d from "@/app/assets/images/header/discord.svg";
import d_light from "@/app/assets/images/header/discord-light.svg";
import y from "@/app/assets/images/header/youtube.svg";
import y_light from "@/app/assets/images/header/youtube-light.svg";
import x from "@/app/assets/images/header/twitter.svg";
import x_light from "@/app/assets/images/header/twitter-light.svg";
import t from "@/app/assets/images/header/telegram.svg";
import t_light from "@/app/assets/images/header/telegram-light.svg";

export default function HeaderBar({ onClickNav }: any) {
  function clickNav(value: string) {
    onClickNav(value);
  }

  return (
    <div className="header-bar">
      <Image
        src={logo}
        width={55}
        height={40}
        alt="logo"
        onClick={() => clickNav("home")}
      />
      <div className="nav">
        <div onClick={() => clickNav("home")}>[ 01 ] Home</div>
        <div onClick={() => clickNav("about-us")}>[ 02 ] About_Us</div>
        <div onClick={() => clickNav("models")}>[ 03 ] Our_Model</div>
        <div onClick={() => clickNav("projects")}>[ 04 ] Our_Projects</div>
      </div>
      <div style={{ flex: 1 }}></div>
      <div className="media">
        <div onClick={() => window.open("https://discord.com/invite/8RnCua96")}>
          <Image src={d} width={40} height={40} alt="discord" />
          <Image src={d_light} width={40} height={40} alt="discord" />
        </div>
        {/* <div>
          <Image src={t} width={40} height={40} alt="telegram" />
          <Image src={t_light} width={40} height={40} alt="telegram" />
        </div> */}
        <div
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCzYllb_kpUHdzuDKuz1Lylw"
            )
          }
        >
          <Image src={y} width={40} height={40} alt="youtube" />
          <Image src={y_light} width={40} height={40} alt="youtube" />
        </div>
        <div onClick={() => window.open("https://x.com/pet_nations")}>
          <Image src={x} width={40} height={40} alt="twitter" />
          <Image src={x_light} width={40} height={40} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
