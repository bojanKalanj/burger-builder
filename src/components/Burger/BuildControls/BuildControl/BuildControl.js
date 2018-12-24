import React from 'react';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='label'>{props.label}</div>
        <button onClick={props.remowed} className='Less' disabled={props.disabled}>Less</button>
        <button onClick={props.added} className='More'>More</button>
    </div>
);

export default buildControl;