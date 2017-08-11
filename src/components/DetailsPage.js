import React from 'react';
import Tile from './tiles';
import '../css/styles.css';
import { Link, } from 'react-router-dom';
import { json } from '../common/jsonFile';
import KeyValuePairComponent from './KeyValuePairComponent';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default class DetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isModalOpen: false
        };
        this.getDetails = this.getDetails.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.postDataToServer = this.postDataToServer.bind(this);
    
    }


    componentWillMount() {
        this.getDetails(this.props.match.params.id);
    }

    getDetails(id) {
        const url = "http://localhost:3000/details/" + id;
        fetch(url)
            .then((resp) => resp.json()) // Transform the data into json
            .then((dataFromServer) => {
                this.setState({
                    data: dataFromServer,
                    title: dataFromServer.title,
                    description: dataFromServer.details.description,
                    director: dataFromServer.details.director,
                    age: dataFromServer.details.age
                });
            }).catch(function (error) {
                //TODO Handle Error 
            });
    }

    onSaveClicked() {
        this.postDataToServer();
        this.setState({ isModalOpen: false });
    }

    postDataToServer() {
        let reqParams = {
            id: this.state.data.id,
            url: this.state.data.url,
            title: this.state.title,
            details: {
                description: this.state.description,
                age: this.state.age,
                director: this.state.director
            }
        };


        let reqObj = {
            method: "POST",
            body: JSON.stringify(reqParams),

        };

        const url = "http://localhost:3000/update";
        fetch(url, reqObj)
            .then((resp) => resp.json())
            .then((dataFromServer) => {
                this.setState({
                    data: dataFromServer,
                    title: dataFromServer.title,
                    description: dataFromServer.details.description,
                    director: dataFromServer.details.director,
                    age: dataFromServer.details.age
                });
            }).catch(function (error) {
                //TODO Handle Error
            });

    }


    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    onNameChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    onCompanyChange(e) {
        this.setState({
            director: e.target.value
        });
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value
        });
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    render() {

        return (

            (this.state.data != null) && (<div className="left">

                <div className="center">
                    <img src={this.state.data.url}
                        style={{ width: '500px', height: '400px' }} alt="tile"/>
                      <hr/>
                    <KeyValuePairComponent key1={"Id :"} value={this.state.data.id} editable={false} />

                    <KeyValuePairComponent key1={"Title :"} value={this.state.title} editable={false} />

                    <KeyValuePairComponent key1={"Description :"} value={this.state.description} editable={false} />

                    <KeyValuePairComponent key1={"Director :"} value={this.state.director} editable={false} />

                    <KeyValuePairComponent key1={"Year of Release :"} value={this.state.age} editable={false} />

                    <button className="btn btn btn-primary" type="button" onClick={this.openModal}>Edit</button>
                </div>

                {(this.state.isModalOpen) ? (<Modal state={this.state} closeModal={this.closeModal} onTitleChange={this.onTitleChange}
                                                     onNameChange={this.onNameChange} onCompanyChange={this.onCompanyChange}
                                                     onAgeChange={this.onAgeChange} onSaveClicked={this.onSaveClicked}  />) : null}

            </div>)
        );
    }
}


DetailsPage.propTypes = {
    match: PropTypes.object,
    params: PropTypes.object,
    id:PropTypes.string
};
