import axios from "axios";
import { env } from "../env";

const getAllCountries = () => {
  return axios
    .get(env.API_URL + "loc")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return null;
    });
};

const getAllStates = (country: string) => {
  return axios
    .get(env.API_URL + "loc", {
      params: {
        country,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return null;
    });
};

const getAllCities = (country: string, state: string) => {
  return axios
    .get(env.API_URL + "loc", {
      params: {
        country,
        state,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return null;
    });
};

export const LocationService = {
  getAllCountries,
  getAllStates,
  getAllCities,
};
