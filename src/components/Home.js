import { HomeSearch } from "./countries-search/HomeSearch";
import CountriesList from "./countries-list/CountriesList";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends React.Component {
  
  render() {
    if(this.props.list) {
      const countriesList = this.props.list['countriesList'];
      return (
        <div className="page-content container">
          <HomeSearch></HomeSearch>
          <CountriesList countries={countriesList}></CountriesList>
        </div>
      );
    }
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

export default connect(mapStateToProps, actions)(Home);
