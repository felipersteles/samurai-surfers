import axios from "axios";
import citiesJson from "../data/cities.json";
import { formatDate } from "@/utils";

const getWavesByLoc = async (lat: number, lng: number) => {
  const res = await axios
    .get(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=waveHeight,windSpeed`,
      {
        headers: {
          Authorization: process.env.STORM_API_KEY,
        },
      }
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
};

const getWavesByCity = async (city: number | number[]) => {
  const cityObject = citiesJson.filter((c) => {
    return c.id === city;
  });

  // console.log(cityObject[0].latitude);
  // console.log(cityObject[0].longitude);

  const lat = Number(cityObject[0].latitude);
  const lng = Number(cityObject[0].longitude);

  // limitar aos dia solicitado
  // e somente DIA (sem noite)
  var start = new Date();
  start.setUTCHours(0, 0, 0, 0);

  var end = new Date();
  end.setUTCHours(23, 59, 59, 999);

  const res = await axios
    .get(`https://api.stormglass.io/v2/weather/point`, {
      headers: {
        Authorization: process.env.STORM_API_KEY,
      },
      params: {
        lat,
        lng,
        params: "waveHeight,windSpeed,swellHeight",
        start,
        end,
      },
    })
    .then(({ data }) => {
      return { city: cityObject[0], day: formatDate(start), ondas: data };
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
};

export const WaveService = { getWavesByLoc, getWavesByCity };
