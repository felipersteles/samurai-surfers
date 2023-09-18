import { CountriesController } from "@/controllers/countries";
import { NextApiRequest, NextApiResponse } from "next";

const countries = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  const controller = new CountriesController();

  if (!query.country) {
    return res.json(controller.getAll());
  }

  if (query.country) {
    const { country } = query;

    if (query.state) {
      const { state } = query;

      return res.json(controller.getCityByState(country, state));
    }

    return res.json(controller.getStatesByCountryName(country));
  }

  return res.status(400).json({ msg: "Erro na requisição." });
};

export default countries;