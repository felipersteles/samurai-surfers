import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WeatherService } from "../../services";
import { Box } from "@mui/material";
import { WaveChart } from "./components";
import { WaveDTO } from "../../dto";

export const CityPage = () => {
  const { cityName, cityId } = useParams();
  const [waveData, setWaveData] = useState<WaveDTO[]>();

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
      // console.log(res);
      setWaveData(res.ondas.ondas.hours);
    });
  }, [cityId]);

  return (
    <Box>
      City: {cityName} and the id is {cityId}
      <br />
      <br />
      <br />
      <WaveChart waveData={waveData} />
    </Box>
  );
};
