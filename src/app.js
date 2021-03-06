import React from 'react';
import Header from './components/Header';
import Home from './components/home';
import { Route, BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import SearchResultsPage from './components/SearchResultsPage';
import DetailsPage from './components/DetailsPage';
import './css/styles.css';
class AppComponent extends React.Component {

    render() {

        return (
            <BrowserRouter forceRefresh>
                <div>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/searchResults/:query" component={SearchResultsPage} />
                        <Route path="/details/:id" component={DetailsPage} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppComponent;