/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import CirclePlus from "../../assets/circle-plus.svg";
import { GAMES as games } from "../../data/config";


const GamesList = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {games.map((game) => (
            <Link key={game.id} href={`/game/${game.slug}`}>
              <div className="xl:w-1/4 max-w-xs md:w-1/2 p-4 cursor-pointer">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={game.img}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font uppercase">
                    {game.type}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {game.title}
                  </h2>
                  <p className="leading-relaxed text-base h-[78px] three-liner">
                    {game.shortDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="xl:w-1/4 max-w-xs md:w-1/2 p-4 flex justify-center items-center h-[402px]">
            <div className="w-52 h-60 border-gray-300 border-2 rounded-lg flex flex-col justify-center items-center ">
              <CirclePlus className="stroke-gray-300" />
              <p className="text-gray-300 text-lg">More Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesList;
