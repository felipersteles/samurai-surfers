import { NextApiRequest, NextApiResponse } from "next";
import { WaveService } from "../../../services";
import allowCors from "../../../utils/cors";

const ondasEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lat, lng, city } = req.query;

  if (city) {
    const ondasRes = await WaveService.getWavesByCity(Number(city));

    return res.status(200).json(ondasRes);
  }

  return res.status(400).json({ msg: "Erro na requisição." });
};

export default allowCors(ondasEndpoint);
