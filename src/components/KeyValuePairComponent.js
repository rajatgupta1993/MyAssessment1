import React from 'react';

const KeyValuePairComponent = (props) => {
   
    return (
        <div className="marginBottom">
            <div>
                <div className='key'> {props.key1}</div>

          {  (props.editable)?( <input type="text" className='value' onChange={props.onChange} 
                                     value={props.value}/>  ):
                               ( <div className='value'> {props.value}</div>)}
               
            </div>
        </div>
    );
}

export default KeyValuePairComponent