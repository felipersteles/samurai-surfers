import {
  Box,
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const OndasForm = () => {
  return (
    <FormControl>
      <Typography>Coordenadas</Typography>
      <Box display="flex" gap="10px">
        <TextField label="Lat" variant="filled" size="small" type="number" />
        <TextField label="Long" variant="filled" size="small" type="number" />
      </Box>
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
        <Button
          sx={{
            color: "black",
            bgcolor: "#FFBF00",
          }}
        >
          Buscar
        </Button>
      </Box>
    </FormControl>
  );
};
