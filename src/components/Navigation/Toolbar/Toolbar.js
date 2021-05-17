import React from 'react';
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Burger/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <BurgerLogo height='80%'/> 
        <div className={classes.DesktopOnly}>Menu</div>
        <nav className={classes.DesktopOnly}> 
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;