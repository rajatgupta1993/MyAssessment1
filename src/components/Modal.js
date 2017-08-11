import React from 'react';
import reactLogo from '../resources/reactLogo.png';
import '../css/styles.css';
import KeyValuePairComponent from './KeyValuePairComponent';
import PropTypes from 'prop-types';

const Modal= (props) => {


    return (
       <div className="backdropStyle">

                        <span className="glyphicon glyphicon-remove floatRight" onClick={props.closeModal}/>
                        <div className="marginBottom marginTop">
                            <div>
                                <div className="key"> id: </div>
                                <div className="value"> {props.state.data.id} </div>
                            </div>
                        </div>

                        <KeyValuePairComponent key1={"Title :"} value={props.state.title} editable onChange={props.onTitleChange} />
                        <KeyValuePairComponent key1={"Name :"} value={props.state.description} editable onChange={props.onNameChange} />
                        <KeyValuePairComponent key1={"Company :"} value={props.state.director} editable onChange={props.onCompanyChange} />
                        <KeyValuePairComponent key1={"Age :"} value={props.state.age} editable onChange={props.onAgeChange} />

                        <button className="btn btn btn-primary" type="button" onClick={props.onSaveClicked}>save</button>
                        <button className="btn btn btn-danger marginLeft" type="button" onClick={props.closeModal}>cancel</button>
                    </div>
    );
};


Modal.propTypes = {
    closeModal: PropTypes.func,
    state: PropTypes.object,
    data:PropTypes.object,
    id: PropTypes.number,
    title: PropTypes.string,
    description:PropTypes.string,  
    director: PropTypes.string,
    age: PropTypes.string,
    onTitleChange:PropTypes.func,
    onNameChange: PropTypes.func,
    onCompanyChange:PropTypes.func,  
    onAgeChange: PropTypes.func,
    onSaveClicked: PropTypes.func,
    
};

export default Modal;