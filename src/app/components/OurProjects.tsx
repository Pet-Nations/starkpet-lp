import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "@/app/assets/styles/our-projects.scss";

import starship from "@/app/assets/images/our-projects/title-starship.png";
import starshipBunny from "@/app/assets/images/our-projects/starkship-bunny.png";
import starknet from "@/app/assets/images/our-projects/starknet.svg";
import social_network from "@/app/assets/images/our-projects/social-network.png";
import triangle from "@/app/assets/images/our-projects/triangle.svg";
import bgMobile from "@/app/assets/images/our-projects/starship-background.png";
import bg from "@/app/assets/images/our-projects/bg.png";
import videoBunny from "@/app/assets/videos/our-project/video.mp4";
import videoSocial from "@/app/assets/videos/our-project/social-network.mp4";
export default function OurProjects({ scroll }: any) {
  const projects = useRef(null);
  useEffect(() => {
    onScroll();
  }, [scroll]);

  function onScroll() {
    if (!scroll || !projects || !projects.current) return;

    let ele = projects.current as HTMLElement;

    window.scrollTo({
      top: ele.getBoundingClientRect().top + window.pageYOffset - 60,
      behavior: "smooth",
    });
  }

  return (
    <div ref={projects} className="our-projects">
      <div className="our-projects-title">Our projects</div>
      <div className="our-projects-body">
        <div className="group-content-1">
          <div className="group-img">
            <div className="video-bunny">
              <video autoPlay loop muted playsInline preload="none">
                <source src={videoBunny} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <Image className="starkship-logo" src={starship} alt="starshipB"/>

            <div className="triangle">
              <Image src={triangle} alt="triangle"/>
              <p>TESTNET</p>
            </div>

          </div>
          <div className="content">
            <Image className="background-our" src={bg} alt={'background'}/>
            <div className="group-1">
              <span>01/</span>
              <span>NFT / FULLY ONCHAIN GAME</span>
            </div>
            <div className="group-2">
              <div className="content-1">
                STARKsHIP
              </div>
              <div className="content-2">
                <span>Build on </span>
                <Image src={starknet} alt="starknet"/>
              </div>
              <div className="content-3">
                Complete your mission by enable the power box to regenerate power source for your ship and achieve the Stark Galaxy.
              </div>
            </div>
            <div className="group-3">
              <a href="https://starkship.petnations.io/" target="_blank" className="btn-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M16.5946 9.66421L7.98803 18.2708L6.57382 16.8566L15.1804 8.25H7.59464V6.25H18.5946V17.25H16.5946V9.66421Z" fill="white"/>
                </svg>
                <p>Let’s explore</p>
              </a>
              <a className="btn-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M16.5946 9.66421L7.98803 18.2708L6.57382 16.8566L15.1804 8.25H7.59464V6.25H18.5946V17.25H16.5946V9.66421Z" fill="white"/>
                </svg>
                <p>See our model</p>
              </a>
            </div>
          </div>
        </div>
        <div className="group-content-2">
          <div className="content">
            <Image className="background-our" src={bg} alt={'background'}/>
            <div className="group-1">
              <span>02/</span>
              <span>SOCIALFI</span>
            </div>
            <div className="group-2">
              <div className="content-1">
                social network
              </div>
              <div className="content-2">
                <span>Build on </span>
                <span>COMING SOON</span>
              </div>
              <div className="content-3">
                All in one social playground for pet web3. Try to explore your creativity and join in the decentralized pet web3 ecosystem.              </div>
            </div>
            <div className="group-3">
              <a className="btn-1">
                COMING SOON
              </a>
            </div>
          </div>
          <div className="group-img">
            <div className="social-network">
              <Image src={social_network} alt="social_network"/>
              <video autoPlay loop muted playsInline preload="none">
                <source src={videoSocial} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="triangle">
              <Image src={triangle} alt="triangle"/>
              <p>SOON</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-projects-body-mobile">
        <div className="group-image-mobile">
          <div className="video-bunny">
            <video autoPlay loop muted playsInline preload="none">
              <source src={videoBunny} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image className="starship-logo" src={starship} alt={"starship"}/>
          <Image src={triangle} alt={"triangle"}/>
        </div>
        <div className="content">
          <Image className="bg-mobile" src={bgMobile} alt={"bgMobile"}/>
          <div className="group-1">
            <span>01/</span>
            <span>NFT / FULLY ONCHAIN GAME</span>
          </div>
          <div className="group-2">
            <div className="content-1">
              STARKsHIP
            </div>
            <div className="content-2">
              <span>Build on </span>
              <Image src={starknet} alt="starknet"/>
            </div>
            <div className="content-3">
              Complete your mission by enable the power box to regenerate power source for your ship and achieve the Stark Galaxy.
            </div>
          </div>
          <div className="group-3">
            <a href="https://starkship.petnations.io/" target="_blank" className="btn-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M16.5946 9.66421L7.98803 18.2708L6.57382 16.8566L15.1804 8.25H7.59464V6.25H18.5946V17.25H16.5946V9.66421Z" fill="white"/>
              </svg>
              <p>Let’s explore</p>
            </a>
            <a className="btn-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M16.5946 9.66421L7.98803 18.2708L6.57382 16.8566L15.1804 8.25H7.59464V6.25H18.5946V17.25H16.5946V9.66421Z" fill="white"/>
              </svg>
              <p>See our model</p>
            </a>
          </div>
        </div>
        <div className="group-image-mobile">
          <Image className="social-img" src={social_network} alt={"social_network"}/>
          <div className="video-social">
            <video autoPlay loop muted playsInline preload="none">
              <source src={videoSocial} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image src={triangle} alt={"triangle"}/>

        </div>
        <div className="content">
          <Image className="bg-mobile" src={bgMobile} alt={"bgMobile"}/>
          <div className="group-1">
            <span>02/</span>
            <span>SOCIALFI</span>
          </div>
          <div className="group-2">
            <div className="content-1">
              social network
            </div>
            <div className="content-2">
              <span>Build on </span>
              <p>COMING SOON</p>
            </div>
            <div className="content-3">
              All in one social playground for pet web3. Try to explore your creativity and join in the decentralized pet web3 ecosystem.
            </div>
          </div>
          <div className="group-3">
            <a className="btn-3">
              <p>COMING SOON</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
