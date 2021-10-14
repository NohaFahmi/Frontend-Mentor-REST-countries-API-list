import { render } from "react-dom"
import Header from './header/Header';
import { HomeSearch } from "./countries-search/HomeSearch";
import {CountriesList} from './countries-list/CountriesList'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='page-content container'>
                <HomeSearch></HomeSearch>
                <CountriesList></CountriesList>
            </div>
        </div>
    )
}

export default Home;