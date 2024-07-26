import "@/app/assets/styles/strategic/system.scss";
import systemImg from "@/app/assets/images/strategic/system/img.png";
import systemImgActive from "@/app/assets/images/strategic/system/img-active.png";
import Image from "next/image";
export default function System() {

    return (
        <div className="system">
            <div className="system-content">
                <div className="system-description">
                    <span>Focus to maximize the contribution with Starknet ecosystem</span>
                    <p>Within various Starknet identities and partners, we aim to connect and collab with them to enhance the <br/> output of the Pet Nations Lab</p>
                </div>
                <a className="system-architect">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="white"/>
                    </svg>
                    <p>Architect model</p>
                </a>
            </div>
            <Image className="system-img" src={systemImg} alt="system-img"/>
            <Image className="system-img-active" src={systemImgActive} alt="system-img-active"/>
        </div>
    );
}
