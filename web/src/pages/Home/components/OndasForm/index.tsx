import { FormControl, Typography, Button } from "@mui/material";
import { SelectPlace } from "./SelectPlace";
import { useState } from "react";
import styled from "styled-components";
import { CityDTO } from "../../../../dto";
import { useNavigate } from "react-router-dom";

export const OndasForm = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState<CityDTO>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(city);
    navigate(`/${city?.name}/${city?.id}`);
  };

  return (
    <OndasFormContainer onSubmit={handleSubmit}>
      <Typography>Lugar</Typography>

      <SelectPlace setCity={setCity} />

      <FormControl>
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
