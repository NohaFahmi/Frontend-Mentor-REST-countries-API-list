import React from "react";
import { CountryCard } from "../country-card/CountryCard";
import './CountriesList.scss';

export class CountriesList extends React.Component {
    render() {
        return (
            <div className='countries-list-container'>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
                <div className='country-card-item'>
                    <CountryCard></CountryCard>
                </div>
            </div>
        )
    }
}