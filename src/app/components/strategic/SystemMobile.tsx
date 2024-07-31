import "@/app/assets/styles/strategic/system-mobile.scss";
import systemMobileImg from "@/app/assets/images/strategic/system/img-mobile.png";
import Image from "next/image";
export default function SystemMobile() {

    return (
        <div className="system-mobile">
            <Image src={systemMobileImg} alt="aboutUsImgMobile"/>
            <div className="system-content">
                <span className="title-card">Focus to maximize the contribution with Blockchain ecosystem</span>
                <span className="body-card">
                    Within various Blockchain identities and partners, we aim to connect and collab with them to enhance the output of the Pet Nations Lab
                </span>
                <button className="btn-follow-us">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                            fill="white"/>
                    </svg>
                    Architect model
                </button>
            </div>
        </div>
    );
}
