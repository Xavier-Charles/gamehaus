import React from "react";
import dynamic from "next/dynamic";
import { verifyProof } from "../api/worldcoin";

const WorldIDWidget = dynamic(
  () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
  { ssr: false }
);

const WorldCoin = ({ setVerified }) => {
  return (
    <section>
      <div className=" h-screen flex justify-center items-center">
        <WorldIDWidget
          actionId="wid_staging_c1b12e7d5b193ed0d557cebd66c6537d" // obtain this from developer.worldcoin.org
          signal="gameHaus-auth"
          enableTelemetry
          onSuccess={(proof) => verifyProof(proof, () => setVerified(true))}
          onError={(error) => console.error(error)}
        />
      </div>
    </section>
  );
};

export default WorldCoin;
