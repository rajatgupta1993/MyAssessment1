import React from 'react';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Tiles extends React.Component {

    render() {
        return (

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={this.props.key} onClick={this.props.onClick}>
                <div className="imageDiv">
                    <div className="movie-image">
                        <img src={this.props.url} alt="tile" />                    
                    </div>
                    <div className="movie-title"> {this.props.title} </div>
                </div>
            </div>
        );
    }

}

Tiles.propTypes = {
    key: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
};
