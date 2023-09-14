import { CountriesController } from "@/controllers/countries";
import { NextApiRequest, NextApiResponse } from "next";

const countries = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = new CountriesController();
  return res.json(controller.getAll());
};

export default countries;
