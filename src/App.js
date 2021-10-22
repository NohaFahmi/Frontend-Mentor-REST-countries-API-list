import './App.css';
import Home from './components/Home';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from './components/country-details/CountryDetails';

const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Home} />
            <Route exact path='/:name' component={CountryDetails} />
            <Route path="*" render={() => (
              <h1 className="error alert-danger">
                404
              </h1>
            )} />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
