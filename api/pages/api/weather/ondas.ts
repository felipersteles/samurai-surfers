import { NextApiRequest, NextApiResponse } from "next";
import { ondas } from "../../../services/ondas";
import allowCors from "../../../utils/cors";

const ondasEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lat, lng } = req.query;

  const ondasData = await ondas(Number(lat), Number(lng));

  return res.status(200).json({ msg: "teste de ondas", ondas: ondasData });
};

export default allowCors(ondasEndpoint);
