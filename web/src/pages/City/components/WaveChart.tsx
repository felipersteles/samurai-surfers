import styled from "styled-components";
import { WaveDTO } from "../../../dto";
import { AxisOptions, Chart } from "react-charts";
import { useEffect, useMemo, useState } from "react";

type WaveChartParams = {
  waveData?: WaveDTO[];
};

type Series = {
  label: string;
  data: WaveDTO[];
};

const data: Series[] = [
  {
    label: "Altura das ondas",
    data: [
      {
        time: new Date(2023, 9, 20, 12),
        waveHeight: {
          noaa: 12,
        },
      },
    ],
  },
];

export const WaveChart = ({ waveData }: WaveChartParams) => {
  const [chartData, setChartData] = useState<Series[]>(data);

  const primaryAxis = useMemo(
    (): AxisOptions<WaveDTO> => ({
      getValue: (datum) => datum.time,
      stacked: true,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<WaveDTO>[] => [
      {
        getValue: (datum) => datum.waveHeight.noaa,
      },
    ],
    []
  );

  useEffect(() => {
    if (!waveData) return;

    setChartData([
      {
        label: "Altura das ondas",
        data: waveData,
      },
    ]);
  }, [waveData]);

  return (
    <ChartContainer>
      <Chart
        options={{
          data: chartData,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
`;
