import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GAMES as games } from "../../data/config";
import WorldCoinAuth from "../../components/WorldCoin";
import GameApp from "../../components/GameApp";
import Link from "next/link";

const Game = () => {
  const [[gameSlug, gameId, state], setSlugs] = useState([]);
  const [gameCode, setGameCode] = useState(null);
  const [verified, setVerified] = useState(true);
  const router = useRouter();

  const game = games.find((game) => game.slug === gameSlug);

  const handleJoin = () => {
    if (gameSlug && gameCode) router.push(`/game/${gameSlug}/${gameCode}`);
  };

  useEffect(() => {
    const { slug } = router.query;
    if (slug) setSlugs(slug);
  }, [router.query]);

  if (gameId) {
    if (verified) return <GameApp />;
    return <WorldCoinAuth setVerified={setVerified} />;
    if (state === "new")
  }

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
              onClick={handleJoin}
              className="bg-[#ffae00] text-white px-5 py-3 font-medium rounded absolute right-2 top-2"
            >
              Join
            </button>
          </div>
          <div className="flex justify-center mt-20">
            <button
              className="bg-[#ffae0099] inline-flex py-3 px-5 rounded-lg items-center hover:bg-[#ffae00] focus:outline-none"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <span className="mx-4 flex items-start flex-col leading-none">
                <Link
                  className="sm:text-3xl text-[#fff] mb-1"
                  style={{ fontFamily: "'Silkscreen', cursive" }}
                  href={`/game/${gameSlug}/${id}/new`}
                >
                  Start a New Game
                </Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;
