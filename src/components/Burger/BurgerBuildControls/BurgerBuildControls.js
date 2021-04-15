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
            {controls.map(control => {
                return <BurgerBuildControl key={control.label}
                 ingredientName={control.label} 
                 added={() => props.addIngredient(control.type)}
                 removed={() =>  props.removeIngredient(control.type)}/>
            })}

        </div>
    )
}

export default burgerBuildControls;