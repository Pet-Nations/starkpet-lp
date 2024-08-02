import Image from "next/image";
import "@/app/assets/styles/intro.scss";
import intro from "@/app/assets/images/intro/img.png";
import intro_mobile from "@/app/assets/images/intro/intro-img-mobile.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-body">
          <div className="content-text">
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
              <span>PET NATIONS LABS</span>
          </div>
          <div className="group-img">
              <Image className="intro-img" src={intro} alt={"intro"}/>
              <Image className="intro-img-mobile" src={intro_mobile} alt={"intro"}/>
          </div>
      </div>
    </div>
  );
}
