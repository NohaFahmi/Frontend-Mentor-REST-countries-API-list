import React from "react";
import { CountryCard } from "../country-card/CountryCard";
import './CountriesList.scss';
import { connect } from "react-redux";
import * as actions from "../../actions";

class CountriesList extends React.Component {

    renderAllCountries({list}) {
        if(list['countriesList']) {
            return list['countriesList'].map((country) => {
                return (
                    <div className='country-card-item'>
                        <CountryCard country={country}></CountryCard>
                    </div>
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
    componentDidMount = () => {
        this.props.getAllCountries();
      };
    
}
const mapStateToProps = (state) => {
    return {
        list: state.countries
    };
  };
export default connect(mapStateToProps, actions)(CountriesList);
