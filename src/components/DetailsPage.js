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


    }


    componentWillMount() {
        this.getDetails(this.props.match.params.id);
    }

    getDetails(id) {

        var data = json.filter((item) => item.id == id);

        this.setState({
            data: data,
            title: data[0].title,
            name: data[0].details.name,
            company: data[0].details.company,
            age: data[0].details.age
        })
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

    onSaveClicked() {

        alert('data saved');
        this.setState({ isModalOpen: false })
    }


    render() {

        console.log(this.state.data);
        return (
            <div className="left">

                {(this.state.isModalOpen) ? (<div className="backdropStyle">

                    <div className="floatRight" onClick={this.closeModal}> close </div>

                    <div className="marginBottom marginTop">
                        <div>
                            <div className='key'> id: </div>
                            <div className='value'> {this.state.data[0].id} </div>
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
                            <img src={this.state.data[0].url}
                                style={{ width: '300px', height: '200px' }} alt='tile' />
                            <KeyValuePairComponent key1={"Id :"} value={this.state.data[0].id} editable={false} />

                            <KeyValuePairComponent key1={"Title :"} value={this.state.title} editable={false} />

                            <KeyValuePairComponent key1={"Name :"} value={this.state.name} editable={false} />

                            <KeyValuePairComponent key1={"Company :"} value={this.state.company} editable={false} />

                            <KeyValuePairComponent key1={"Age :"} value={this.state.age} editable={false} />

                            <button type="button" onClick={this.openModal}>Edit</button>
                        </div>)}

                {/*<div className="backdropStyle">

                    <div className="floatRight" onClick={this.closeModal}> close </div>

                    <div className="marginBottom">
                        <div>
                            <div className='key'> id: </div>
                            <div className='value'> {this.state.data[0].id} </div>
                        </div>
                    </div>

                    <KeyValuePairComponent key1={"Title :"} value={this.state.title} onChange={this.onTitleChange} />

                     <KeyValuePairComponent key1={"Name :"} value={this.state.name} onChange={this.onNameChange} />

                      <KeyValuePairComponent key1={"Company :"} value={this.state.company} onChange={this.onCompanyChange} />

                       <KeyValuePairComponent key1={"Age :"} value={this.state.age} onChange={this.onAgeChange} />


                </div>*/}



            </div>
        );
    }
}