import { FormControl } from "@mui/base";
import { Select, MenuItem, InputLabel, SelectChangeEvent } from "@mui/material";

type SelectViewParams = {
  optionsList?: string[];
  elementId: string;
  label: string;
  selected: string;
  handleChange: (e: SelectChangeEvent) => void;
  getArrayFromData?: () => string[];
  handleClick?: () => void;
};

export const SelectPlaceView = ({
  elementId,
  handleChange,
  label,
  selected,
  optionsList,
  handleClick,
  getArrayFromData = () => [],
}: SelectViewParams) => {
  const list = getArrayFromData();

  return (
    <FormControl>
      <InputLabel
        id={elementId}
        sx={{
          left: "auto",
          top: "auto",
        }}
      >
        {label}
      </InputLabel>
      <Select
        id={elementId}
        value={selected}
        label={`${label}`}
        onChange={handleChange}
        onClick={handleClick}
        sx={{
          width: "100%",
        }}
      >
        <MenuItem value={-1}>Selecione um lugar</MenuItem>
        {optionsList &&
          optionsList.map((data, index) => (
            <MenuItem key={index} value={index}>
              {data}
            </MenuItem>
          ))}

        {list.length > 0 &&
          list.map((data, index) => (
            <MenuItem key={index} value={index}>
              {data}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
