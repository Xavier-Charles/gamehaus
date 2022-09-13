import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

export const getProvider = () => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appName: "GameHaus",
    appLogoUrl: "https://i.imgur.com/KGYPsq3.png",
  });
  return coinbaseWallet.makeWeb3Provider();
};
