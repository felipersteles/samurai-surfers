import locJson from "../../data/loc.json";
import citiesJson from "../../data/cities.json";

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

  getCitiesByState(country: string | string[], state: string | string[]) {
    const cities = citiesJson.filter((c) => {
      return c.country_name === country && c.state_name === state;
    });

    return cities.map((city) => {
      return { name: city.name, id: city.id, state: city.state_code };
    });
  }
}
