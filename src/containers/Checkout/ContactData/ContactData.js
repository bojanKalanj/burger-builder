import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = () => {
        console.log(this.props.ingredients)
    }

    render(){
        return(
            <div className="ContactData">
                <h4>Enter </h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="email" placeholder="Your Mail" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                </form>
                <Button clicked={this.orderHandler} btnType='Success'>ORDER</Button>
            </div>
        )
    }
}

export default ContactData;