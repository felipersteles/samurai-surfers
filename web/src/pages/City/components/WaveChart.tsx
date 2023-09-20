import { WaveDTO } from "../../../dto";

type WaveChartParams = {
  data?: WaveDTO[];
};

export const WaveChart = ({ data }: WaveChartParams) => {
  return <>Chart wave</>;
};
