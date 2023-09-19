import locJson from "../../data/loc.json";

export class CountriesController {
  getAll() {
    const countriesName = locJson.map((country) => {
      return country.name;
    });

    return countriesName;
  }

  getStatesByCountryName(name: string | string[]) {
    const countries = locJson.filter((loc) => {
      return loc.name === name;
    });

    return countries[0].states.map((state) => {
      return state.name;
    });
  }

  getCityByState(country: string | string[], stateName: string | string[]) {
    const countries = locJson.filter((loc) => {
      return loc.name === country;
    });

    const state = countries[0].states.filter((state) => {
      return state.name === stateName;
    });

    return state[0].cities;
  }
}
