import { NextApiRequest, NextApiResponse } from "next";

const cities = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json("enviar cidades");
};

export default cities;
