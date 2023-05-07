// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    // Get all the countries from the Asia continent/region using the Filter function
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log("Asian Countries:", asianCountries);
    
    // Get all the countries with a population of less than 2 lakhs using Filter function
    const smallCountries = data.filter(country => country.population < 200000);
    console.log("Small Countries:", smallCountries);
    
    // Print the following details name, capital, flag using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common, "Capital:", country.capital, "Flag:", country.flags);
    });
    
    // Print the total population of countries using reduce function
    const populationByCountry = data.reduce((acc, country) => {
      acc[country.name.common] = country.population;
      return acc;
    }, {});
      console.log("population:", populationByCountry);
    
    
    // Print the country which uses US Dollars as currency.
    const usDollarCountries = data.filter(country => country.currencies === "USD");
    console.log("Countries using US Dollar:", usDollarCountries);
    
  })
  .catch(error => console.log(error));
