import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

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

    render () { 
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    Builder controls
                </div>
            </Aux>
        )};
};

export default BurgerBuilder