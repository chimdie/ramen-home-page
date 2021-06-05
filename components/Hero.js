import React from "react";
import Image from "next/image";
import Bottom from "./BottomHero";

function Hero() {
  return (
    <div className="container max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 mt-10 md:m-12">
        <div className="p-3">
          <p className="font-bold text-xl md:text-4xl mt-7 px-1 text-justify md:text-left">
            A Bowl of Love From Japanese Cusine.
          </p>
          <div className="pt-5 text-justify">
            <p>
              Ramen is a noodle soup dish that was originally imported from
              China and has become one of the most popular dishes in Japan in
              recent decades.
            </p>
          </div>
          <div className="mt-5 justify-center text-center md:text-justify">
            <button className="bg-red-700 py-3 px-6 rounded-sm text-white font-bold hover:bg-white hover:text-red-700 transition duration-500">
              ORDER NOW
            </button>
          </div>
        </div>
        <div className="order-first md:order-last items-center justify-center flex">
          <Image
            src="/images/Illustration-3.png"
            height={300}
            width={500}
            alt="ramen"
          />
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Hero;
