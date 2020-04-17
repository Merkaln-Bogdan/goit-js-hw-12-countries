const countries = 'https://restcountries.eu/rest/v2/name/{name}';
fetch(countries)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
console.log(countries);
