/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useCoinbaseAuth } from "../../api/coinbase";

const Hero = () => {
  const { CBConnect, account } = useCoinbaseAuth();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            className="title-font sm:text-4xl md:text-7xl text-3xl mb-4 font-medium text-gray-900"
            style={{ fontFamily: "'Silkscreen', cursive" }}
          >
            Let The
            <br className="hidden lg:inline-block" />
            Games Begin
          </h1>
          <p className="mb-8 leading-relaxed max-w-[650px]">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              onClick={CBConnect}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Connect with Coinbase
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Connect with MetaMask
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://i.imgur.com/tBDbLzL.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
