import React, { useState } from "react";
import { useRouter } from "next/router";
import { GAMES as games } from "../../data/config";

const Game = () => {
  const [gameCode, setGameCode] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const game = games.find((game) => game.slug === slug);

  return (
    <section className="">
      <div
        className="min-h-screen w-screen flex justify-center items-center"
        style={{ backgroundImage: "url(https://i.imgur.com/rVhe0ke.png)" }}
      >
        <div>
          <div className="relative">
            <input
              className="w-80 sm:w-[500px] md:w-[600px] pl-5 lg:pr-24 sm:text-2xl h-16 p-2 bg-white border-2 border-[#ffae00] shadow rounded focus:outline-none"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
              placeholder="Enter your game code..."
            />
            <button
              type="button"
              className="bg-[#ffae00] text-white px-4 py-3 font-medium rounded absolute right-2 top-2"
            >
              Enter
            </button>
          </div>
          <div className="flex justify-center mt-20">
            <button
              className="bg-[#ffae0099] inline-flex py-3 px-5 rounded-lg items-center hover:bg-[#ffae00] focus:outline-none"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <span className="mx-4 flex items-start flex-col leading-none">
                <span
                  className="sm:text-3xl text-[#fff] mb-1"
                  style={{ fontFamily: "'Silkscreen', cursive;" }}
                >
                  Start a New Game
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
