export type WaveDTO = {
  time: Date;
  waveHeight: WaveHeightDTO;
};

export type WaveHeightDTO = {
  icon?: number;
  noaa: number;
  sg?: number;
};
