import { NextApiRequest, NextApiResponse } from "next";

const test = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  return res.status(200).json({ msg: "hello world" });
};

export default test;
