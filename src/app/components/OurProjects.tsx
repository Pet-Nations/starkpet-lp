import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "@/app/assets/styles/our-projects.scss";

import starship from "@/app/assets/images/our-projects/title-starship.png";
import background from "@/app/assets/images/our-projects/starship-background.png";
import starknet from "@/app/assets/images/our-projects/starknet.svg";
import social_network from "@/app/assets/images/our-projects/social-network.png";

export default function OurProjects({ scroll }) {
  const projects = useRef(null);
  useEffect(() => {
    if (scroll)
      window.scrollTo({
        top:
          projects.current.getBoundingClientRect().top +
          window.pageYOffset -
          60,
        behavior: "smooth",
      });
  }, [scroll]);

  return (
    <div ref={projects} className="our-projects">
      <div>Our projects</div>
      <div className="content">
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="110"
              viewBox="0 0 124 110"
              fill="none"
            >
              <path
                d="M1 106.5V4.12839C1 1.54816 4.04137 0.171633 5.97988 1.87449L122.519 104.246C124.598 106.072 123.306 109.5 120.539 109.5H4C2.34315 109.5 1 108.157 1 106.5Z"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
            <div>Testnet</div>
            <video autoPlay playsInline muted loop width={904} height={496}>
              <source src="/projects-video.mp4" type="video/mp4" />
            </video>
            <Image src={starship} width={235} height={55} alt="starship" />
          </div>
          <div>
            <Image src={background} width={368} height={496} alt="background" />
            <div>
              <div>
                <div>01/</div>
                <div>Nft / Fully onchain game</div>
              </div>
              <div>Starkship</div>
              <div>
                <div>Build on</div>
                <Image src={starknet} width={211} height={48} alt="starknet" />
              </div>
              <div>
                Token. It is a type of digital asset that is unique and cannot
                be replicated or replaced. NFTs are built using blockchain
                technology. of a digital.
              </div>
              <div className="go-dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.0946 9.66421L7.48803 18.2708L6.07382 16.8566L14.6804 8.25H7.09464V6.25H18.0946V17.25H16.0946V9.66421Z"
                    fill="white"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M16.0946 9.66421L7.48803 18.2708L6.07382 16.8566L14.6804 8.25H7.09464V6.25H18.0946V17.25H16.0946V9.66421Z"
                    fill="black"
                  />
                </svg>
                <div>Go to dashboard</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={background} width={368} height={496} alt="background" />
            <div>
              <div>
                <div>02/</div>
                <div>Socialfi</div>
              </div>
              <div>social network</div>
              <div>
                <div>Build on</div>
                <Image src={starknet} width={211} height={48} alt="starknet" />
              </div>
              <div>
                Token. It is a type of digital asset that is unique and cannot
                be replicated or replaced. NFTs are built using blockchain
                technology. of a digital.
              </div>
              <div className="coming-soon">
                <div>Coming soon</div>
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="110"
              viewBox="0 0 124 110"
              fill="none"
            >
              <path
                d="M1 106.5V4.12839C1 1.54816 4.04137 0.171633 5.97988 1.87449L122.519 104.246C124.598 106.072 123.306 109.5 120.539 109.5H4C2.34315 109.5 1 108.157 1 106.5Z"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
            <div>Soon</div>
            <video autoPlay playsInline muted loop width={904} height={496}>
              <source src="/social-network.mp4" type="video/mp4" />
            </video>
            <Image
              src={social_network}
              width={904}
              height={496}
              alt="social-network"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
