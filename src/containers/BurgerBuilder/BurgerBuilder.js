import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

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
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; 
        const updatedIngredients = { ...this.state.ingredients };

        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const addedPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + addedPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler =(type) => {
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

    }
    render () { 
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BurgerBuildControls addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}/>
                </div>
            </Aux>
        )};
};

export default BurgerBuilder