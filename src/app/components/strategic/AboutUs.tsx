import "@/app/assets/styles/strategic/about-us.scss";
import aboutUsImg from "@/app/assets/images/strategic/about-us/img.png";
import aboutUsImgActive from "@/app/assets/images/strategic/about-us/img-active.png";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="about-us">
            <Image className="about-us-img" src={aboutUsImg} alt="about-us-img"/>
            <Image className="about-us-img-active" src={aboutUsImgActive} alt="about-us-img-active"/>
            <div className="about-content">
                <div className="about-description">
                    <span>About us</span>
                    <p>Come up from the team that love pet and web3. We are building the decentralized pet ecosystem to serve on chain pet 3 activities.</p>
                </div>
                <a className="about-follow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="white"/>
                    </svg>
                    <p>Follow us</p>
                </a>
            </div>
        </div>
    );
}
