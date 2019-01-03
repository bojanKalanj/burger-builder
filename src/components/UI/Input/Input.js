import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.inputtype){
        case ('textarea'):
            inputElement = <textarea className='InputElement' {...props} />;
            break;
        default:
            inputElement = <input className='InputElement' {...props} />;
    }

    return(
        <div className='Input'>
            <label className='Label'> {props.label} </label>
            {inputElement}
        </div>
    )
}

export default input;