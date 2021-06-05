import React from "react";
import Image from "next/image";

function BottomHero() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-1 md:p4 gap-2 md:gap-4">
        <div className="flex bg-white p-1 m-2 md:justify-between rounded-sm border-2 border-yellow-100 items-center justify-center hover:scale-100">
          <div className="flex items-center justify-center pl-2 ">
            <Image
              src="/images/Illustration-2.png"
              height={100}
              width={120}
              alt="tomato"
            />
          </div>
          <div className="p-4">
            <p className="font-bold pb-2">Tomato Ramen</p>
            <p className="text-sm pr-7">
              Hard boiled, soft boiled, raw and marinated eggs...
            </p>
          </div>
        </div>
        <div className="flex bg-white p-1 m-2 md:justify-between rounded-sm border-2 border-yellow-100 items-center justify-center">
          <div className="flex items-center justify-center pl-2 ">
            <Image
              src="/images/Illustration-1.png"
              height={90}
              width={120}
              alt="tomato"
            />
          </div>
          <div className="p-4">
            <p className="font-bold pb-2">Tori Ramen</p>
            <p className="text-sm pr-7">
              Made of chicken and a white creamy soup...
            </p>
          </div>
        </div>
        <div className="flex bg-white p-1 m-2 md:justify-between rounded-sm border-2 border-yellow-100 items-center justify-center">
          <div className="flex items-center justify-center pl-2 ">
            <Image
              src="/images/Illustration.png"
              height={100}
              width={120}
              alt="tomato"
            />
          </div>
          <div className="p-4">
            <p className="font-bold pb-2">Tono kotsu Ramen</p>
            <p className="text-sm pr-7">
              Made of pork bones which have been boiled down...
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xs justify-center mt-3 p-2">
        <p>Served with </p>
        <svg
          className="w-5 h-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
}

export default BottomHero;
