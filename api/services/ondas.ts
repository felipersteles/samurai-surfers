import axios from "axios";

export const ondas = async () => {
  const res = await axios
    .get(
      "https://api.stormglass.io/v2/weather/point?lat=-2.481819&lng=-44.249176&params=waveHeight,windSpeed",
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
