import React from 'react';
import PropTypes from 'prop-types';

const KeyValuePairComponent = (props) => {

    return (
        <div className="marginBottom">
            <div className="keyValueContainer">
                <div className="key"> {props.key1}</div>

                {(props.editable) ? (<input type="text" className="value" onChange={props.onChange}
                    value={props.value} />) :
                    (<div className="value"> {props.value}</div>)}

            </div>
        </div>
    );
};

KeyValuePairComponent.propTypes = {
    key1: PropTypes.string,
    value: PropTypes.string,
    onChange:PropTypes.func,
    editable:PropTypes.bool
};


export default KeyValuePairComponent;