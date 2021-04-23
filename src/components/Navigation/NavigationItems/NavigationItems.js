import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

//This component will be used in the sidebar as well
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link='/' active>Burger Builder</NavigationItem>
       <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
)

export default navigationItems;