import Image from "next/image";

import "@/app/assets/styles/intro.scss";
import intro from "@/app/assets/images/intro/intro-img.svg";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <div>Pet nations labs</div>
        <div>Pet nations labs</div>
        <div>Pet nations labs</div>
      </div>
      <Image src={intro} width={709} height={655} alt="intro" />
    </div>
  );
}
