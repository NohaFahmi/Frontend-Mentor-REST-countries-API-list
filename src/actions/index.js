// const baseURL = 'http://localhost:3030/api';
// const baseURL = 'https://npabackendapis.nohaa.repl.co/api';
const baseURL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {

    let response = await fetch(`${baseURL}/all`);
    let payload = await response.json();

    return {
        type: 'ALL_COUNTRIES',
        payload
    }
}