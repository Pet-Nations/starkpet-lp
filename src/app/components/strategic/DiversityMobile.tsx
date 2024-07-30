import "@/app/assets/styles/strategic/diversify-mobile.scss";
import diversifyMobileMobile from "@/app/assets/images/strategic/diversify/deversity-mobile.png";
import Image from "next/image";

export default function DiversifyMobile() {
    return (
        <div className="diversify-mobile">
            <Image src={diversifyMobileMobile} alt="aboutUsImgMobile"/>
            <div className="diversify-content">
                <span className="title-card">Diversify Models</span>
                <span className="body-card">
                    Pet Nations Lab build sustainable models to ensure the ecosystem growth.
                </span>
                <button className="btn-follow-us">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                            fill="white"/>
                    </svg>
                    Document
                </button>
            </div>
        </div>
    );
}
