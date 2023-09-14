import { Box } from "@mui/material";
import { Header, Footer } from "./components";

type LayoutParams = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutParams): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
