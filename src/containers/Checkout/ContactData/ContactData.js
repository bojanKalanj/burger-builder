import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-instance';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Bojan',
                email: 'bojan.kalanj@gail.com'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            });
    }

    render(){
        let form =(
                <form>
                    <Input inputtype='input' type="text" name="name" placeholder="Your Name" />
                    <Input inputtype='input' type="text" name="email" placeholder="Your Mail" />
                    <Input inputtype='input' type="text" name="street" placeholder="Street" />
                    <Input inputtype='input' type="text" name="postal" placeholder="Postal Code" />
                </form>
        )
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className="ContactData">
                <h4>Enter </h4>
                    {form}
                <Button clicked={this.orderHandler} btnType='Success'>ORDER</Button>
            </div>
        )
    }
}

export default ContactData;