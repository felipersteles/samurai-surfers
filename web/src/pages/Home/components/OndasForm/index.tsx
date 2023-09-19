import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { SelectPlace } from "./SelectPlace";
import { useState } from "react";
import { LocationParams } from "../../../../dto";
import styled from "styled-components";
import { WeatherService } from "../../../../services";

export const OndasForm = () => {
  const [ondasForm, setOndasForm] = useState<LocationParams>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(ondasForm);

    if (!ondasForm) return;

    WeatherService.getWavesFromLoc(ondasForm.latitude, ondasForm.longitude)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <OndasFormContainer onSubmit={handleSubmit}>
      <Typography>Lugar</Typography>

      <SelectPlace setOndasForm={setOndasForm} />

      <FormControl>
        <Typography>Informações</Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Checkbox />}
            label="Sea Level"
          />
          <FormControlLabel
            value="male"
            control={<Checkbox />}
            label="Wind Speed"
          />
          <FormControlLabel
            value="other"
            control={<Checkbox />}
            label="Wave Height"
          />
          <FormControlLabel
            value="other"
            control={<Checkbox />}
            label="Swell Height"
          />
        </RadioGroup>

        <Typography>Data</Typography>
        <Box display="flex" gap="15px">
          <DatePicker defaultValue={dayjs("2022-04-17")} />
        </Box>
        <Button
          sx={{
            color: "black",
            bgcolor: "#FFBF00",
          }}
          type="submit"
        >
          Buscar
        </Button>
      </FormControl>
    </OndasFormContainer>
  );
};

const OndasFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 7px;
  padding: 20px 15px;
`;
