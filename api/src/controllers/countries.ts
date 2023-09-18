import countriesJson from "../../data/countries.json";

export class CountriesController {
  getAll() {
    const countriesData = JSON.stringify(countriesJson);
    console.log(countriesData[0]);
    return "todos os paises";
  }
}
