import React from 'react';
import Tile  from './tiles';
import '../css/styles.css'
import {json} from '../common/jsonFile'
import {  Link, } from 'react-router-dom'

export default class SearchResultsPage extends React.Component{

	constructor(props){
		super(props)

	}
    render(){
        
     
    	var displayData= json.filter( (item) => item.title.indexOf(this.props.match.params.query) !==-1 );
      
        return(
          
             <div >
               { displayData.map( (item) => <Tile key= {item.id} url={item.url} title={item.title}/> )}
             </div>
          
        );
    }
}