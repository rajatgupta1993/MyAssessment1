import React from 'react';
import Tile  from './tiles';
import '../css/styles.css'
import {  Link, } from 'react-router-dom'
import {json} from '../common/jsonFile'
export default class home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
        this.onValueChange=this.onValueChange.bind(this);
    }

    onValueChange(e){

        this.setState({
            searchText: e.target.value
        })
    }

    handleClick(e){

    }

    render(){
        return(
            <div>

                <input type='text' value={this.state.searchText} onChange={this.onValueChange}
                style={{border: '1px solid', marginBottom:'80px',padding:'5px'}} placeholder='search'/>

                <Link to = {`/searchResults/${this.state.searchText}`}> <input type="submit" /></Link>
                   
                      
             <div >
               { json.map( (item) => <Tile key= {item.id} url={item.url} title={item.title}/> )}
             </div>
             </div>
        );
    }
}