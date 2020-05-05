import './fetchCountries';
import './style.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';

const countries = 'https://restcountries.eu/rest/v2/name/';
export default function countryRestAPI(name) {
  return fetch(countries + name).then(response => response.json());
}
