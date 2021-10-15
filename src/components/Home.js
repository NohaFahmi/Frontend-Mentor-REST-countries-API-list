import { HomeSearch } from "./countries-search/HomeSearch";
import CountriesList from "./countries-list/CountriesList";
import React from "react";


class Home extends React.Component {
  
  render() {
    return (
      <div className="page-content container">
        <HomeSearch></HomeSearch>
        <CountriesList></CountriesList>
      </div>
    );
  }
}

export default Home;
