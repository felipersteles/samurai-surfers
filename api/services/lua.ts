import axios from "axios";

export const lua = async () => {
  const res = await axios
    .get(
      "https://api.stormglass.io/v2/astronomy/point?lat=-2.481819&lng=-44.249176",
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
