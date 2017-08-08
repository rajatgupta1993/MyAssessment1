import React from 'react';
import '../css/styles.css'

export default class Tiles extends React.Component{

    render(){
        return (

            <div className='imageDiv'>
                <img src={this.props.url}
                style={{width: '33%', height:'200px'}}  alt='tile' />
                <div > {this.props.title} </div> 
            </div>

        );
    }

}