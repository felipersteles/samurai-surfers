import { NextApiRequest, NextApiResponse } from "next";
import ondas from "../../data/waveExample.json";
import allowCors from "../../utils/cors";

const test = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  return res.status(200).json({ msg: "hello world", ondas });
};

export default allowCors(test);
