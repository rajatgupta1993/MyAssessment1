import React from 'react';
import '../css/styles.css'
import {  Link, } from 'react-router-dom'

export default class Tiles extends React.Component{

    render(){
      
        return (

            <div className='imageDiv' onClick={this.props.onClick}>
               <img src={this.props.url}
                style={{width: '33%', height:'200px'}}  alt='tile' /> 
                <div > {this.props.title} </div> 
                
            </div>

        );
    }

}