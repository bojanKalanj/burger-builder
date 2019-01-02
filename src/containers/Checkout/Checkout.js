import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state={
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount(){
        let query = new URLSearchParams(this.props.location.search);
        console.log(query);
        console.log(this.props.location.search)
        let ingredients = {};
        for(let param of query.entries()){
            console.log(param);
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => ( <ContactData ingredients={this.state.ingredients}/> )} />
            </div>
        )
    }
}

export default Checkout;