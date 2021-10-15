// const baseURL = 'http://localhost:3030/api';
// const baseURL = 'https://npabackendapis.nohaa.repl.co/api';
const baseURL = 'https://restcountries.com/v2';

export const getAllCountries = async () => {

    let response = await fetch(`${baseURL}/all`);
    let payload = await response.json();

    return {
        type: 'ALL_COUNTRIES',
        payload
    }
}

export const getCountryByFullName = async (countryName) => {

    let response = await fetch(`${baseURL}/name/${countryName}?fullText=true`);
    let payload = await response.json();

    return {
        type: 'COUNTRY_BY_NAME',
        payload
    }
}