import React from 'react';
import Tile  from './tiles';
import '../css/styles.css'
import {  Link, } from 'react-router-dom'
import {json} from '../common/jsonFile'
export default class home extends React.Component{

    constructor(props){
        super(props)

        this.state={ 
                     searchText:'' ,
                     data : ''
                    };

        this.onValueChange=this.onValueChange.bind(this);
        this.onTileClicked=this.onTileClicked.bind(this);
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

    onValueChange(e){
        this.setState({
            searchText: e.target.value,
            tileId:'2'
        })
    }

    onTileClicked(e){
       this.setState({
       tileId: e.target.getAttribute("id")
       }) 

    }

    render(){
      console.log(this.state.data);

        return(

            (this.state.data.length>0)&& ( <div>

                <input type='text' value={this.state.searchText}  onChange={this.onValueChange}
                style={{border: '1px solid', marginBottom:'80px',padding:'5px'}} placeholder='search'/>
                <Link to = {`/searchResults/${this.state.searchText}`}><input type="submit" /></Link>
             <div >
               { this.state.data.map( (item) => <Link to = {`/details/${item.id}`}>
                                            <Tile key= {item.id} url={item.url} title={item.title} id={item.id} 
                                                  onClick={this.onTileClicked}/>
                                     </Link> 
                )}
             </div>
             </div>)
        );
    }
}