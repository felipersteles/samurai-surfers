import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WeatherService } from "../../services";
import { Box } from "@mui/material";
import { WaveChart } from "./components";

export const CityPage = () => {
  const { cityName, cityId } = useParams();

  useEffect(() => {
    if (!cityId) return;

    // WeatherService.getWavesFromCity(cityId)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    WeatherService.getMockWaves().then((res) => {
      console.log(res);
    });
  }, [cityId]);

  return (
    <Box>
      City: {cityName} and the id is {cityId}
      <br />
      <br />
      <br />
      <WaveChart />
    </Box>
  );
};
