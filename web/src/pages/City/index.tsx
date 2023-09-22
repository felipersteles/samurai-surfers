import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WeatherService } from "../../services";
import { Box, Typography } from "@mui/material";
import { WaveChart } from "./components";
import { WaveDTO } from "../../dto";
import { Layout } from "../../components";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

export const CityPage = () => {
  const { cityName, cityId } = useParams();
  const [waveData, setWaveData] = useState<WaveDTO[]>();
  const [date, setDate] = useState<Dayjs | null>();

  useEffect(() => {
    if (!cityId) return;

    // WeatherService.getWavesFromCity(cityId)
    //   .then((res) => {
    //     console.log(res);
    //     setWaveData(res.ondas.hours);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    WeatherService.getMockWaves().then((res) => {
      console.log(res);
      setDate(dayjs(res.ondas.day));
      setWaveData(res.ondas.ondas.hours);
    });
  }, [cityId]);

  return (
    <Layout>
      <CityContainer>
        <Box>
          <Typography fontSize="50px">{cityName}</Typography>
          <DatePicker
            label="Selecione o dia"
            value={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </Box>
        <br />
        <br />
        <br />
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          alignItems="center"
        >
          <WaveChart waveData={waveData} />
          <WaveChart waveData={waveData} />
          <WaveChart waveData={waveData} />
          <WaveChart waveData={waveData} />
        </Box>
      </CityContainer>
    </Layout>
  );
};

const CityContainer = styled.div``;
