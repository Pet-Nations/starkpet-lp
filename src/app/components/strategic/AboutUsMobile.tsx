import "@/app/assets/styles/strategic/about-us-mobile.scss";
import aboutUsImgMobile from "@/app/assets/images/strategic/about-us/img_mobile.png";
import Image from "next/image";

export default function AboutUsMobile() {
    return (
        <div className="about-us-mobile">
            <Image src={aboutUsImgMobile} alt="aboutUsImgMobile"/>
            <div className="about-content">
                <span className="title-card">About Us</span>
                <span className="body-card">
                    Come up from the team that love pet and web3. We are building the decentralized pet ecosystem to serve on chain pet 3 activities.
                </span>
                <button className="btn-follow-us">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="white"/>
                    </svg>
                    <p>Follow Us</p>
                </button>
            </div>
        </div>
    );
}
