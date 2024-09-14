"use client";

import Image from "next/image";
import HeroBanner from "./hero-banner";

const Hero = () => {
  return (
    <>
      <div className="w-full  border-black">
        <Image
          src="/hero.webp"
          width={0}
          alt="hero"
          height={0}
          sizes="100vw"
          className="w-full h-[100%] -z-10"
        />
        <HeroBanner />
      </div>
    </>
  );
};

export default Hero;
