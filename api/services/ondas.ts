import axios from "axios";

export const ondas = async (lat: number, lng: number) => {
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
