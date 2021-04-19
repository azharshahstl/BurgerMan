import React from 'react';
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Burger/Logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <BurgerLogo /> 
        <div>Menu</div>
        <nav>...</nav>
    </header>
)

export default toolbar;