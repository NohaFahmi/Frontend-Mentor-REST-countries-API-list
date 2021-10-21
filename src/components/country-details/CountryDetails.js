import React from "react";
import { Link } from "react-router-dom";
import "./CountryDetails.scss";
import { connect } from "react-redux";
import * as actions from "../../actions";

class CountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: null,
    };
  }
  renderCountryDetails({ country }) {
    if (country) {
      return (
        <div className="details-wrapper">
          <img src={country.flags.png} alt="country-flag" />
          <div className="details-wrapper__body">
            <h3>{country.name}</h3>
            <div className="details-wrapper__attributes">
              <div className="details-wrapper__attributes_left">
                <p>
                  <span>Native Name:</span> {country.nativeName}
                </p>
                <p>
                  <span>Population:</span> {country.population}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub Region:</span> {country.subregion}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>
              <div className="details-wrapper__attributes_right">
                <p>
                  <span>Top Level Domain:</span> {country.topLevelDomain[0]}
                </p>
                <p>
                  <span>Currencies:</span> {country.currencies[0].name}
                </p>
                <p>
                  <span>Languages:</span> {country.languages[0].name}
                </p>
              </div>
            </div>
            {country.borders ? (
              <div className="details-wrapper__border-countries">
                <h5>Border Countries:</h5>
                {this.renderBorderCountries(this.props)}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    }
  }
  renderBorderCountries({ borders }) {
    if (borders) {
      return borders.map((border) => {
        return (
          <Link className="btn border-country" to={`/${border.name}`}>
            {border.name}
          </Link>
        );
      });
    }
  }
  render() {
    if (this.props) {
      return (
        <div className="country-details-container container">
          <Link to="/" className="btn btn-light back-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            Back
          </Link>
          {this.renderCountryDetails(this.props)}
        </div>
      );
    }
  }
  async componentDidMount() {
    const { name } = this.props.match.params;
    this.setState({
      countryName: name,
    });
    await this.props.getCountryByFullName(this.props.match.params.name);
    if (this.props.country.borders) {
      await this.props.getCountriesByListOfCodes(this.props.country.borders);
    }
  }

  async componentDidUpdate() {
    if (this.state.countryName !== this.props.match.params.name) {
      this.setState({
        countryName: this.props.match.params.name,
      });
      await this.props.getCountryByFullName(this.props.match.params.name);
      if (this.props.country.borders) {
        await this.props.getCountriesByListOfCodes(this.props.country.borders);
      }
    }
  }
}
const mapStateToProps = (state) => {
  return {
    country: state.countries.country,
    borders: state.countries.borderCountries,
  };
};

export default connect(mapStateToProps, actions)(CountryDetails);
