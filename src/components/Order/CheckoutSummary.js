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
            <Button clicked={props.checkoutCancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.checkoutContinued}    btnType='Success'>Continue</Button>
        </div>
    )
}

export default checkoutSummary;