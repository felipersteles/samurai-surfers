import styled from "styled-components";
import { SurferIcon } from "../../../assets/AllSvg";
import hokusai from "../../../assets/images/hokusai1.png";

export const Surfista = () => {
  return (
    <Onda>
      <div className="surfer">
        <SurferIcon size="150px" />
      </div>
    </Onda>
  );
};

const Onda = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${hokusai});
  background-size: cover;
  background-repeat: repeat-x;
  animation: 20s surf linear infinite;

  .surfer {
    animation: 1s dj ease-in-out infinite;
  }

  @keyframes surf {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 2000px;
    }
  }

  @keyframes dj {
    0%,
    100% {
      transform: translate(20px);
    }
    25% {
      transform: translate(10px);
    }
    50% {
      transform: translate(15px);
    }
    75% {
      transform: translate(20px);
    }
  }
`;
