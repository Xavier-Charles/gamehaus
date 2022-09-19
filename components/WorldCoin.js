import React from "react";
import dynamic from "next/dynamic";

const WorldIDWidget = dynamic(
  () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
  { ssr: false }
);



const WorldCoin = ({ setVerified }) => {

  const verifyProof = async (proof) => {
    const response = await apiReq("/api/claim", {
      signal: "gameHaus-auth",
      ...proof,
    });
    if (response.ok) {
       setVerified(true);
    } else {
      console.error(await response.json());
      setError("Error claiming.");
    }
  };
  return (
    <section>
      <div className=" h-screen flex justify-center items-center">
        <WorldIDWidget
          actionId="wid_staging_c1b12e7d5b193ed0d557cebd66c6537d" // obtain this from developer.worldcoin.org
          signal=""
          enableTelemetry
          onSuccess={(proof) => verifyProof(proof,)}
          onError={(error) => console.error(error)}
        />
      </div>
    </section>
  );
};

export default WorldCoin;
