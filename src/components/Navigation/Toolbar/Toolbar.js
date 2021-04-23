import React from 'react';
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Burger/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <BurgerLogo height='80%'/> 
        <div>Menu</div>
        <nav><NavigationItems /></nav>
    </header>
)

export default toolbar;