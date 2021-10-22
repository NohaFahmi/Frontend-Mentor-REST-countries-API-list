import React from "react";
import { CountryCard } from "../country-card/CountryCard";
import "./CountriesList.scss";
import { Link } from "react-router-dom";
import UiLoader from "../Loader/Loader";

class CountriesList extends React.Component {
  renderAllCountries({ countries }) {
    if (countries) {
      return (
        <div className="countries-list-container">
          {countries.map((country) => {
            return (
              <Link to={`/${country.name}`} key={country.name}>
                <div className="country-card-item">
                  <CountryCard country={country}></CountryCard>
                </div>
              </Link>
            );
          })}
        </div>
      );
    } else {
      return (
          <div class='countries-list-loader'>
               <UiLoader type="spin" color="lightGrey" />
          </div>
      )
    }
  }
  render() {
    return <div>{this.renderAllCountries(this.props)}</div>;
  }
}
export default CountriesList;
