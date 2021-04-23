import React from 'react'; 
import BurgerLogo from '../../Burger/Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
// import classes from '../../Log/Logo.module.css'
// import the above classes to use them in the the optional styling section that has been commented out

// Inside the outer div, put the following...
// <div className={classes.Logo}>
    // <BurgerLogo />
// </div> 

const sideDrawer = (props) => {

   return ( <div className={classes.SideDrawer}>
        <BurgerLogo  height='10%'/> 
        <nav>
            <NavigationItems />
        </nav>

    </div>
   )};

export default sideDrawer;