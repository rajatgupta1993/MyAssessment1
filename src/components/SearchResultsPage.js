import React from 'react';
import Tile  from './tiles';
import '../css/styles.css'
import {json} from '../common/jsonFile'
import {  Link, } from 'react-router-dom'

export default class SearchResultsPage extends React.Component{

	constructor(props){
		super(props);
         this.state={ 
                     data : ''
                    };

   this.getData=this.getData.bind(this);

    }

    componentWillMount(){
        this.getData();
    }

    getData(){
        const url = "http://localhost:3000/home";
        fetch(url)
         .then((resp) => resp.json()) // Transform the data into json
        .then((dataFromServer)=> {
            console.log(dataFromServer);
            this.setState({data:dataFromServer});
    }).catch(function(error) {
   console.log(error);
  }); 
  
    }
    render(){
        
        console.log('searchResult ------' , this.state.data);
    	var displayData= (this.state.data.length>0)?this.state.data.filter( (item) => item.title.indexOf(this.props.match.params.query) !==-1 ) : null;
      
        return(
          
          (displayData!==null) &&
            ( <div >
               { displayData.map( (item) => <Tile key= {item.id} url={item.url} title={item.title}/> )}
             </div>)
          
        );
    }
}