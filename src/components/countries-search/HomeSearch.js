import React from "react";
import './HomeSearch.scss';

export class HomeSearch extends React.Component {

    state = {
        isOpen: false,
        regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    };

    onFilterByRegion(region) {
        this.props.filterByRegion(region, true);
    }
    onSearchByName(name) {
        this.props.searchCountries(name, true);
    }

    renderFilterOptions({regions}) {
        return regions.map((region) => {
            return (
                <a className="dropdown-item" href="/" onClick={(event) => {
                    event.preventDefault();
                    this.onFilterByRegion(region)
                }} key={region}>{region}</a>
            )
        })
    }

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        return (
            <div className='search-wrapper'>
                <div className='input-group search-input'>
                    <div class="input-group-prepend">
                        <button className='btn btn-icon' disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                    <input className='form-control' placeholder='Search for a country..' name='searchKeywords' value={this.state.searchKeyword} onChange={(event) => {
                        this.setState({
                            [event.target.name]: event.target.value
                        })
                        this.onSearchByName(event.target.value);
                    }}/>
                </div>
                <div class="dropdown">
                    <button className="btn dropdown-toggle filter-input" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen });
                    }}>
                        Filter by Region
                    </button>
                    <div className={menuClass} aria-labelledby="dropdownMenuButton">
                       {this.renderFilterOptions(this.state)}
                    </div>
                </div>
            </div>
        )
    }
}