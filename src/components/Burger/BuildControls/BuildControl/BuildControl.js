import React from 'react';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='label'>{props.label}</div>
        <button className='Less'>Less</button>
        <button className='More'>More</button>
    </div>
);

export default buildControl;