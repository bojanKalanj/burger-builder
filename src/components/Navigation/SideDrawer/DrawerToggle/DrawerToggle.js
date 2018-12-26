import React from 'react';

const drawerToggle = (props) => (
    <div onClick={props.clicked}>
        <div className='DrawerToggle'></div>
        <div className='DrawerToggle'></div>
        <div className='DrawerToggle'></div>
    </div>
)

export default drawerToggle;