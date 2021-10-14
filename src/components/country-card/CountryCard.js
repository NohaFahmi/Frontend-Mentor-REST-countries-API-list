import React from "react";
import './CountryCard.scss';
export class CountryCard extends React.Component {
    render() {
        return (
            <div className='country-card'>
                <img src='https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' alt='country-flag'/>
                <div className='country-card__body'>
                    <h4>Germany</h4>
                    <div className='country-card__attributes'>
                        <p><span>Population:</span> 81,770,900</p>
                        <p><span>Region:</span> Europe</p>
                        <p><span>Capital:</span> Berlin</p>
                    </div>
                </div>
            </div>
        )
    }
}