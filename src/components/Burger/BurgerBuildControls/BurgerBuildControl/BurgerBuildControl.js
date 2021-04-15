import React from 'react';
import classes from './BurgerBuildControl.module.css'

const burgerBuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientName}</div>
            <button className={classes.Add} onClick={props.added}>Add</button>
            <button className={classes.Remove} onClick={props.removed}>Remove</button>
        </div>
    )

}

export default burgerBuildControl;