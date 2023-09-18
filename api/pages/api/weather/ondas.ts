import { NextApiRequest, NextApiResponse } from "next";
import { ondas } from "../../../services/ondas";
import allowCors from "../../../utils/cors";

const ondasEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  const ondasData = await ondas();

  return res
    .status(200)
    .json({ msg: "teste de ondas", ondas: ondasData.hours });
};

export default allowCors(ondasEndpoint);
