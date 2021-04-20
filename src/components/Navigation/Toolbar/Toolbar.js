import React from 'react';
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Burger/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <BurgerLogo /> 
        <div>Menu</div>
        <nav><NavigationItems /></nav>
    </header>
)

export default toolbar;