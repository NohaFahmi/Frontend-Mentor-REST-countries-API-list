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
        payload: payload[0]
    }
}

export const getCountriesByListOfCodes = async (listOfCodes) => {

    let response = await fetch(`${baseURL}/alpha?codes=${listOfCodes}`);
    let payload = await response.json();

    return {
        type: 'COUNTRIES_BY_CODES',
        payload
    }
}

export const getCountriesByRegion = async (region) => {

    let response = await fetch(`${baseURL}/region/${region}`);
    let payload = await response.json();

    return {
        type: 'COUNTRIES_BY_REGION',
        payload
    }
}

export const searchCountriesByName = async(name) => {
    let response = await fetch(`${baseURL}/name/${name}`);
    let payload = await response.json();

    return {
        type: 'SEARCH_COUNTRIES',
        payload
    }
}