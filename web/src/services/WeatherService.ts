import axios from "axios";
import { env } from "../env";

const getWavesFromLoc = (lat: number, lng: number) => {
  return axios
    .get(env.API_URL + "weather/ondas", {
      params: {
        lat,
        lng,
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

const getWavesFromCity = (city: string) => {
  return axios
    .get(env.API_URL + "weather/ondas", {
      params: {
        city,
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

const getMockWaves = () => {
  return axios
    .get(env.API_URL + "teste")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error", err);
      return null;
    });
};

export const WeatherService = {
  getWavesFromLoc,
  getWavesFromCity,
  getMockWaves,
};
