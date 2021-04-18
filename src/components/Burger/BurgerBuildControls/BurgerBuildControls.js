import React from 'react';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';
import classes from './BurgerBuildControls.module.css';

const controls = [
    {label: 'lettuce', type: 'Lettuce'}, 
    {label: 'cheese', type: 'Cheese'}, 
    {label: 'hamburger', type: 'HamburgerPatties'}, 
    {label: 'bacon', type: 'Bacon'}, 
    {label: 'mustard', type: 'Mustard'}, 
    {label: 'ketchup', type: 'Ketchup'}, 
    
]

const burgerBuildControls = (props) => {
    return (
        <div className={classes.BurgerBuildControls}>
            <p>Current Price: $<strong>{props.price}</strong></p> 
            {/* Add .fixed(2) to 'props.price' to fix the decimals to 2 places if needed */}
            {controls.map(control => {
                return <BurgerBuildControl key={control.label}
                 ingredientName={control.label} 
                 added={() => props.addIngredient(control.type)}
                 removed={() =>  props.removeIngredient(control.type)}
                 disabled={props.disabled[control.type]}/>
            })}
            <button className={classes.OrderButton}
             disabled={!props.purchasable}
             onClick={props.ordered}>Order Now</button>

        </div>
    )
}

export default burgerBuildControls;