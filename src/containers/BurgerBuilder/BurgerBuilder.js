import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'

const INGREDIENT_PRICES = {
    Cheese: 1.0, 
    HamburgerPatties: 2.0, 
    Ketchup: 0.5,
    Mustard: 0.5, 
    Lettuce: 0.75, 
    Bacon: 1.5

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Ketchup: 0,
            Mustard: 0, 
            Cheese: 0, 
            Lettuce: 0, 
            Bacon: 0, 
            HamburgerPatties: 0 
        }, 
        totalPrice: 4,
        ableToPurchase: false,
        purchasing: false
    }

    updatedPurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(ingred => {
            return ingredients[ingred]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({ableToPurchase: (sum > 0)});
    }

    // updatePurchaseState = () => {
    //     this.setState({ableToPurchase: (this.state.ableToPurchase > 4)})
    // }
    // The above method could also be used to check if the item can be purchased since the base price 
    // starts at $4 and that is not purchaseable.  So if at least 1 item is added, the total is greater
    // than 4 and is now purchaseable.  

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; 
        const updatedIngredients = { ...this.state.ingredients };

        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const addedPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + addedPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatedPurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        const updatedCount = oldCount - 1; 
        const updatedIngredients = { ...this.state.ingredients };

        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const reducedPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - reducedPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.updatedPurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchaseHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchaseHandler = () => {
        // alert('You are continuing with your purchase')
        const order = {
            ingredients: this.state.ingredients, 
            price: this.state.totalPrice,
            customer: {
                name: "Azhar", 
                address: {
                    street: "3434 Hope street", 
                    zipCode: "63116", 
                    country: "USA"
                },
                email: "a@a.com"

            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json', order)
        .then(response => console.log(response))
    }

    render () { 

        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }

        return (
            <Aux>
                    <Modal showModal={this.state.purchasing} closeModal={this.cancelPurchaseHandler}>
                        <OrderSummary ingredients={this.state.ingredients}
                                      cancel={this.cancelPurchaseHandler}
                                      purchase={this.continuePurchaseHandler}
                                      total={this.state.totalPrice}/>
                    </Modal>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerBuildControls addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.ableToPurchase}/>
            </Aux>
        )};
};

export default BurgerBuilder