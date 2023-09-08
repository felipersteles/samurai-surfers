import styled from "styled-components";
import { Layout } from "../../components";
import { OndasForm, Surfista } from "./components";

export const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Surfista />
        <OndasForm />
      </HomeContainer>
    </Layout>
  );
};

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 10px 16px;
`;
