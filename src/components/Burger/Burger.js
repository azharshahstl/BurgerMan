import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


const burger = (props) => {

    let transformedArrayOfIngredients = Object.keys(props.ingredients).map(ingreKey =>{
        return [...Array(props.ingredients[ingreKey])].map((__, i) => {
            return <BurgerIngredient key={ingreKey + i} type={ingreKey} />
        })
    }).flat();
    if (transformedArrayOfIngredients.length === 0) {
        transformedArrayOfIngredients = <p>Please Start Adding Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="Bun-Top" />
           {transformedArrayOfIngredients}
            <BurgerIngredient type="Bun-Bottom" />
        </div>
    )
}

export default burger;