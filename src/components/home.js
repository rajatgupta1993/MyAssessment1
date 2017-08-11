import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import { json } from '../common/jsonFile';

export default class home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            data: ''
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onTileClicked = this.onTileClicked.bind(this);
        this.getData = this.getData.bind(this);
        this.onCrossClicked = this.onCrossClicked.bind(this);
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

    onValueChange(e) {
        this.setState({
            searchText: e.target.value,
            tileId: '2'
        });
    }

    onTileClicked(e) {
        this.setState({
            tileId: e.target.getAttribute("id")
        });

    }

    onCrossClicked() {

        this.setState({
            searchText: ''
        });
    }

    render() {
        //console.log(this.state.data);
        return (
            (this.state.data.length > 0) && (
                <div className="home-container">
                 
                    <div className="container marginTop marginBottom">
                        <div className="row">
                           
                                <div id="custom-search-input">
                                    <div className="input-group col-md-12" style={{display:'inline-flex'}} >
                                        <input type="text" className="form-control input-lg" placeholder="Search"
                                            value={this.state.searchText} onChange={this.onValueChange} />
                                        {(this.state.searchText === '') ? null :

                                            (<button type="button" onClick={this.onCrossClicked} className=" crossIcon" data-dismiss="modal">&times;</button>)}
                                        <span className="input-group-btn">
                                            <Link to={`/searchResults/${this.state.searchText}`}>
                                                <button className="btn btn-info btn-lg" type="button">
                                                    <i className="glyphicon glyphicon-search"/>
                                                </button>
                                            </Link>
                                        </span>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        {this.state.data.map((item) => <Link key={item.id} to={`/details/${item.id}`}>
                            <Tile key={item.id} url={item.url} title={item.title} id={item.id}
                                onClick={this.onTileClicked} />
                        </Link>
                        )}
                    </div>
                </div>)
        );
    }
}