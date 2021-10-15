import React from "react";
import './CountryCard.scss';
export class CountryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: this.props.country
        }
    }
    render() {
        if(this.state.country) {
            const {country} = this.state;
            return (
                <div className='country-card'>
                    <img src={country.flags.png} alt='country-flag'/>
                    <div className='country-card__body'>
                        <h4>{country.name.common}</h4>
                        <div className='country-card__attributes'>
                            <p><span>Population:</span> {country.population}</p>
                            <p><span>Region:</span> {country.region}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}