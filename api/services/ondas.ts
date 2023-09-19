import axios from "axios";
import citiesJson from "../data/cities.json";

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

const getWavesByCity = async (city: string | string[]) => {
  const cityObject = citiesJson.filter((c) => {
    return c.name === city;
  });

  // console.log(cityObject[0].latitude);
  // console.log(cityObject[0].longitude);

  const lat = Number(cityObject[0].latitude);
  const lng = Number(cityObject[0].longitude);

  // limitar aos dia solicitado
  // e somente DIA (sem noite)
  const start = new Date();
  console.log(start);

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
        params: "waveHeight,windSpeed",
        start,
        end,
      },
    })
    .then(({ data }) => {
      return { city_id: cityObject[0], ondas: data };
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
};

export const WaveService = { getWavesByLoc, getWavesByCity };
