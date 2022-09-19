import apiReq from "@/lib/fetcher";

const handler = async (req, res) => {
  const { signal, merkle_root, nullifier_hash, proof } = req.body;

  const verificationResponse = await apiReq(
    "https://developer.worldcoin.org/api/v1/verify",
    {
      signal,
      merkle_root,
      nullifier_hash,
      proof,
      action_id: "wid_staging_c1b12e7d5b193ed0d557cebd66c6537d",
    }
  );

  if (verificationResponse.ok) {
    return res.status(200).json({ success: true });
  }
  return res.status(400).json(await verificationResponse.json());
};

export default handler;
