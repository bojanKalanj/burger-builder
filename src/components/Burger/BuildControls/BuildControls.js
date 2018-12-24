import React from 'react';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

const buildControl = (props) => (
    <div className='BuildControls'>
        { controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label } 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                remowed={() => props.ingredientRemowed(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        )) }
    </div>
);

export default buildControl;