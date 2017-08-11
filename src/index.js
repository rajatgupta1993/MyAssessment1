
import React from "react";
import {render} from "react-dom";
import './css/styles.css'; 

// import { BrowserRouter as Router, } from 'react-router-dom';
import App from './app';

class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <App/>
        );
    }
}

render(<Root/>, document.getElementById('root'));


