import classes from './BurgerIngredients.module.css'
import React from 'react'; 
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component {
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
                case('Meat'): 
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

export default BurgerIngredient