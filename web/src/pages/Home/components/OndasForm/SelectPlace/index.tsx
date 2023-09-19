import { SelectPlaceView } from "./SelectPlaceVew";
import { LocationService } from "../../../../../services";
import { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { SelectChangeEvent } from "@mui/material";

type SelectPlaceParams = {
  setCity?: (city: string) => void;
};

export const SelectPlace = ({ setCity }: SelectPlaceParams) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("-1");

  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState("-1");

  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState("-1");

  const selectCountry = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value as string);
    getStatesFromApi(countries[event.target.value as unknown as number]);
  };

  const selectState = (event: SelectChangeEvent) => {
    setSelectedState(event.target.value as string);
    getCitiesFromApi(
      countries[selectedCountry as unknown as number],
      states[event.target.value as unknown as number]
    );
  };

  const selectCity = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value as string);
    if (setCity) setCity(cities[event.target.value as unknown as number]);
  };

  const getCountriesFromApi = useCallback(() => {
    LocationService.getAllCountries()
      .then((res) => {
        setCountries(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getStatesFromApi = useCallback((country: string) => {
    LocationService.getAllStates(country)
      .then((res) => {
        setStates(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getCitiesFromApi = useCallback((country: string, state: string) => {
    LocationService.getAllCities(country, state)
      .then((res) => {
        // console.log(res);
        setCities(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(getCountriesFromApi, [getCountriesFromApi]);

  return (
    <Box>
      <SelectPlaceView
        label="País"
        elementId="country"
        optionsList={countries}
        selected={selectedCountry}
        handleChange={selectCountry}
      />

      <SelectPlaceView
        label="Estado"
        elementId="state"
        optionsList={states}
        selected={selectedState}
        handleChange={selectState}
      />

      <SelectPlaceView
        label="Cidade"
        elementId="city"
        optionsList={cities}
        selected={selectedCity}
        handleChange={selectCity}
      />
    </Box>
  );
};
