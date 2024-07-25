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

export default function HeaderBar() {
  return (
    <div className="header-bar">
      <Image src={logo} width={55} height={40} alt="logo" />
      <div className="nav">
        <div>[01] Home</div>
        <div>[02] About_Us</div>
        <div>[03] Our_Model</div>
        <div>[04] Our_Projects</div>
      </div>
      <div style={{ flex: 1 }}></div>
      <div className="media">
        <div>
          <Image src={d} width={40} height={40} alt="discord" />
          <Image src={d_light} width={40} height={40} alt="discord" />
        </div>
        <div>
          <Image src={t} width={40} height={40} alt="telegram" />
          <Image src={t_light} width={40} height={40} alt="telegram" />
        </div>
        <div>
          <Image src={y} width={40} height={40} alt="youtube" />
          <Image src={y_light} width={40} height={40} alt="youtube" />
        </div>
        <div>
          <Image src={x} width={40} height={40} alt="twitter" />
          <Image src={x_light} width={40} height={40} alt="twitter" />
        </div>
      </div>
    </div>
  );
}
