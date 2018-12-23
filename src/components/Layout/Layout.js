import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <div>toolbar, sidebar dropdown</div>
        <main className='Content'>
            {props.children}
        </main>
    </Auxiliary>
)

export default layout;
