import "@/app/assets/styles/strategic/diversify.scss";
import diversifyUsImg from "@/app/assets/images/strategic/diversify/img.png";
import diversifyUsImgActive from "@/app/assets/images/strategic/diversify/img-active.png";
import Image from "next/image";
export default function Diversify() {
    return (
        <div className="diversify">
            <Image className="diversify-img" src={diversifyUsImg} alt="diversify-img" />
            <Image className="diversify-img-active" src={diversifyUsImgActive} alt="diversify-img-active" />
            <div className="diversify-content">
                <div className="diversify-description">
                    <span>Diversify Models</span>
                    <p>Pet Nations Lab build sustainable models to ensure the ecosystem growth.</p>
                </div>
                <a className="diversify-follow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="white"/>
                    </svg>
                    <p>Document</p>
                </a>
            </div>
        </div>
    );
}
