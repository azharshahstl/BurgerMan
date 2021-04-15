import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Ketchup: 0,
            Mustard: 0, 
            Cheese: 0, 
            Lettuce: 0, 
            Bacon: 0, 
            HamburgerPatties: 0 
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1; 
        const updatedIngredients = { ...this.state.ingredients };

        updatedIngredients[type] = updatedCount;

    }

    render () { 
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BurgerBuildControls />
                </div>
            </Aux>
        )};
};

export default BurgerBuilder