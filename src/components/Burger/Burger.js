import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bun-Top" />
            <BurgerIngredient type="Cheese" />
            <BurgerIngredient type="Lettuce" />
            <BurgerIngredient type="Meat" />
            <BurgerIngredient type="Bun-Bottom" />
        </div>
    )
}

export default burger;