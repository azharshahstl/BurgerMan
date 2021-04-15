import React from 'react';
import classes from './BurgerBuildControl.module.css'

const burgerBuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientName}</div>
            <button className={classes.Add}>Add</button>
            <button className={classes.Remove}>Remove</button>
        </div>
    )

}

export default burgerBuildControl;