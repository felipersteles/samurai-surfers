import { NextApiRequest, NextApiResponse } from "next";
import { lua } from "../../services/lua";

const test = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  const luaData = await lua();

  return res
    .status(200)
    .json({ msg: "ta vendo aquela lua? OLHE:", lua: luaData.data });
};

export default test;
