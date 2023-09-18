import styled from "styled-components";

export const Footer = () => {
  return <FooterContainer>© Samurai Surfers</FooterContainer>;
};

const FooterContainer = styled.footer`
  background: #000;
  color: white;
  width: 100%;
  padding: 10px 50px;
  position: absolute;
  bottom: 0;
`;
