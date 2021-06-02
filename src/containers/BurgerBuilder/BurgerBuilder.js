import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.js'

const INGREDIENT_PRICES = {
    Cheese: 1.0, 
    HamburgerPatties: 2.0, 
    Ketchup: 0.5,
    Mustard: 0.5, 
    Lettuce: 0.75, 
    Bacon: 1.5

}

class BurgerBuilder extends Component {

    state = { ingredients: null, 
        totalPrice: 4,
        ableToPurchase: false,
        purchasing: false, 
        loading: false, 
        error: false
    }

    componentDidMount(){
        axios.get('https://hammy-hammy-default-rtdb.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data})
        })
        .catch(error => {
            this.setState({error: true})
        })
        console.log(this.state.ingredients)
    }

    updatedPurchaseState = (ingredients) => {
        console.log(ingredients)
        debugger
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
        console.log(type)
        const oldCount = this.state.ingredients[type];
        console.log(this.state.ingredients[type])
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
        this.setState({loading: true});
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
        .then(response => this.setState({loading: false, purchasing: false}))
        .catch(error => this.setState({loading: false, purchasing: false}))
    }

    render () { 

        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }

        let orderSummary = null; 
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        if (this.state.ingredients){
            burger = (<>
                        <Burger ingredients={this.state.ingredients} />
                        <BurgerBuildControls addIngredient={this.addIngredientHandler} 
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.ableToPurchase}/>
                    </>)
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                cancel={this.cancelPurchaseHandler}
                purchase={this.continuePurchaseHandler}
                total={this.state.totalPrice}/>

        }

        return (
            <Aux>
                    <Modal showModal={this.state.purchasing} closeModal={this.cancelPurchaseHandler}>
                        {orderSummary}
                    </Modal>
                    {burger}
                    
            </Aux>
        )};
};

export default withErrorHandler(BurgerBuilder, axios)