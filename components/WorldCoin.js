import React, { useState } from "react";
import dynamic from "next/dynamic";
import { WidgetProps } from "@worldcoin/id";

let WorldIDWidget;
try {
  WorldIDWidget = dynamic(
    () => import("@worldcoin/id").then((mod) => mod.WorldIDWidget),
    { ssr: false }
  );
} catch (e) {
  console.log(e);
}
const WorldCoin = () => {
  const [proof, setProof] = useState(null);
  return (
    <section>
      <div className=" h-screen flex justify-center items-center">
        <WorldIDWidget
          actionId="wid_staging_c1b12e7d5b193ed0d557cebd66c6537d" // obtain this from developer.worldcoin.org
          signal="auth"
          enableTelemetry
          onSuccess={(proof) => console.log(proof)}
          onError={(error) => console.error(error)}
        />
      </div>
    </section>
  );
};

export default WorldCoin;
