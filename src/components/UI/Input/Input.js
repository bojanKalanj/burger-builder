import React from 'react';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement'];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push('Invalid')
    }

    switch (props.inputtype){
        case ('textarea'):
            inputElement = <textarea 
                            className={inputClasses.join(' ')} 
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    onChange={props.changed}
                    value={props.value}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                </select>
            )
            break;
        default:
            inputElement = <input 
                            className={inputClasses.join(' ')} 
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={props.changed}/>;
    }

    return(
        <div className='Input'>
            <label className='Label'> {props.label} </label>
            {inputElement}
        </div>
    )
}

export default input;