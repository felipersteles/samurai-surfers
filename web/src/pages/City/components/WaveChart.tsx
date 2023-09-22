import styled from "styled-components";
import { WaveDTO } from "../../../dto";
import { AxisOptions, Chart } from "react-charts";
import { useEffect, useMemo, useState } from "react";
import { dateFormatUTCToString } from "../../../utils";

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
        time: new Date(2023, 9, 18, 12),
        waveHeight: {
          noaa: 1,
        },
      },
      {
        time: new Date(2023, 9, 18, 12),
        waveHeight: {
          noaa: 0.8,
        },
      },
      {
        time: new Date(2023, 9, 21, 12),
        waveHeight: {
          noaa: 0.7,
        },
      },
      {
        time: new Date(2023, 9, 20, 12),
        waveHeight: {
          noaa: 0.92,
        },
      },
    ],
  },
];

export const WaveChart = ({ waveData }: WaveChartParams) => {
  const [chartData, setChartData] = useState<Series[]>(data);

  const primaryAxis = useMemo(
    (): AxisOptions<WaveDTO> => ({
      getValue: (datum) => dateFormatUTCToString(datum.time),
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

    // waveData.map((wave) => console.log(dateFormatUTCToString(wave.time)));

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
  width: 650px;
  height: 650px;
  background-color: white;
`;
