import React from 'react';
import Tile from './tiles';
import '../css/styles.css'
import { Link, } from 'react-router-dom'
import { json } from '../common/jsonFile'
import KeyValuePairComponent from './KeyValuePairComponent'

export default class DetailsPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: '',
            isModalOpen: false
        }
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
                    name: dataFromServer.details.name,
                    company: dataFromServer.details.company,
                    age: dataFromServer.details.age
                })
            }).catch(function (error) {
                console.log(error);
            });
    }
    onSaveClicked() {


        this.postDataToServer();
        this.setState({ isModalOpen: false })
    }

    postDataToServer() {
        let reqParams = {
            id: this.state.data.id,
            url: this.state.data.url,
            title: this.state.title,
            details: {
                name: this.state.name,
                age: this.state.age,
                company: this.state.company
            }
        }


        let reqObj = {
            method: "POST",
            body: JSON.stringify(reqParams),

        }

        const url = "http://localhost:3000/update";
        debugger;
        fetch(url, reqObj)
            .then((resp) => resp.json())
            .then((dataFromServer) => {
                this.setState({
                    data: dataFromServer,
                    title: dataFromServer.title,
                    name: dataFromServer.details.name,
                    company: dataFromServer.details.company,
                    age: dataFromServer.details.age
                })
            }).catch(function (error) {
                console.log(error);
            });

    }


    openModal() {
        this.setState({ isModalOpen: true })
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onCompanyChange(e) {
        this.setState({
            company: e.target.value
        })
    }


    onAgeChange(e) {
        this.setState({
            age: e.target.value
        })
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        })
    }



    render() {

        console.log(this.state.data);
        return (
            (this.state.data != null) && (<div className="left">

                {(this.state.isModalOpen) ? (<div className="backdropStyle">

                    <div className="floatRight" onClick={this.closeModal}> close </div>

                    <div className="marginBottom marginTop">
                        <div>
                            <div className='key'> id: </div>
                            <div className='value'> {this.state.data.id} </div>
                        </div>
                    </div>

                    <KeyValuePairComponent key1={"Title :"} value={this.state.title} editable={true} onChange={this.onTitleChange} />

                    <KeyValuePairComponent key1={"Name :"} value={this.state.name} editable={true} onChange={this.onNameChange} />

                    <KeyValuePairComponent key1={"Company :"} value={this.state.company} editable={true} onChange={this.onCompanyChange} />

                    <KeyValuePairComponent key1={"Age :"} value={this.state.age} editable={true} onChange={this.onAgeChange} />

                    <button type="button" onClick={this.onSaveClicked}>save</button>
                    <button type="button" onClick={this.closeModal}>cancel</button>

                </div>) :
                    (
                        <div className="center">
                            <img src={this.state.data.url}
                                style={{ width: '300px', height: '200px' }} alt='tile' />
                            <KeyValuePairComponent key1={"Id :"} value={this.state.data.id} editable={false} />

                            <KeyValuePairComponent key1={"Title :"} value={this.state.title} editable={false} />

                            <KeyValuePairComponent key1={"Name :"} value={this.state.name} editable={false} />

                            <KeyValuePairComponent key1={"Company :"} value={this.state.company} editable={false} />

                            <KeyValuePairComponent key1={"Age :"} value={this.state.age} editable={false} />

                            <button type="button" onClick={this.openModal}>Edit</button>
                        </div>)}

            </div>)
        );
    }
}