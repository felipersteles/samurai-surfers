import { NextApiRequest, NextApiResponse } from "next";

const states = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json("enviar estados");
};

export default states;
