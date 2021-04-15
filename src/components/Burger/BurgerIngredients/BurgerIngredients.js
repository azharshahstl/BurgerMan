import classes from './BurgerIngredients.module.css'
import React from 'react'; 
import PropTypes from 'prop-types';

class BurgerIngredients extends React.Component {
    render() {
        let ingredient = null;
        
            switch (this.props.type) {
                case('Bun-Bottom'): 
                    ingredient = <div className={classes.BunBottom} ></div>;
                    break;
                case('Bun-Top'): 
                    ingredient = (
                        <div className={classes.BunTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                    );
                    break;
                case('Ketchup'): 
                        ingredient = <div className={classes.Ketchup}></div>
                    break;
                case('Mustard'): 
                        ingredient = <div className={classes.Mustard}></div>
                    break;
                case('HamburgerPatties'): 
                        ingredient = <div className={classes.Meat}></div>
                    break;
                case('Lettuce'): 
                        ingredient = <div className={classes.Lettuce}></div>
                    break;
                case('Cheese'): 
                        ingredient = <div className={classes.Cheese}></div>
                    break;
                case('Bacon'): 
                        ingredient = <div className={classes.Bacon}></div>
                    break;
                default: 
                        ingredient =  null
            }

        return ingredient;

    }
        
    
};

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients