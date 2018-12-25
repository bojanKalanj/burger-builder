import React from 'react';

const backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className='Backdrop'></div> : null
);

export default backdrop;