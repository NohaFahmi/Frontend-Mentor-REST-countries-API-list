import React from "react";
import { CountryCard } from "../country-card/CountryCard";
import './CountriesList.scss';
import {Link} from 'react-router-dom';

class CountriesList extends React.Component {

    renderAllCountries({countries}) {
        if(countries) {
            return countries.map((country) => {
                return (
                    <Link to={`/${country.name}`} key={country.name}>
                        <div className='country-card-item'>
                            <CountryCard country={country}></CountryCard>
                        </div>
                    </Link>
                )
            })
        }
    }
    render() {
            return (
                <div className='countries-list-container'>
                    {this.renderAllCountries(this.props)}
                </div>
            )
    }
    
}
export default CountriesList;
