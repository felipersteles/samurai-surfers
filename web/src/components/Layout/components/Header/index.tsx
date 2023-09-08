import styled from "styled-components";
import { ChangeTheme, ButtonArea } from "./components";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <HeaderContainer>
      <ChangeTheme />
      <Typography>Samurai Surfers</Typography>
      <ButtonArea />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
`;
