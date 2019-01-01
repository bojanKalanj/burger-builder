import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope you like your burger motherfucker!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger'>CANCEL</Button>
            <Button btnType='Success'>Continue</Button>
        </div>
    )
}

export default checkoutSummary;