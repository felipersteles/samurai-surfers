import { Stack, Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export const ChangeTheme = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <DarkMode />
      <Switch />
      <LightMode />
    </Stack>
  );
};
