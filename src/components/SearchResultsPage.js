import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { json } from '../common/jsonFile';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SearchResultsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };

        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        const url = "http://localhost:3000/home";
        fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then((dataFromServer) => {
                this.setState({ data: dataFromServer });
            }).catch(function (error) {
              //TODO Handle Error
            });

    }
    render() {
      
    //    console.log('searchResult ------', this.state.data);
        let displayData = (this.state.data.length > 0) ? this.state.data.filter((item) => item.title.toUpperCase().indexOf(this.props.match.params.query.toUpperCase()) !== -1) : null;

        return (

            (displayData !== null) &&
            (<div className="searchResultDiv">
                {displayData.map((item) => <Tile key={item.id} url={item.url} title={item.title} />)}
            </div>)

        );
    }
}

SearchResultsPage.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    query: PropTypes.String
};
