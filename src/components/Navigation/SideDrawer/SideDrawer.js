import React from 'react'; 
import BurgerLogo from '../../Burger/Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
// import classes from '../../Log/Logo.module.css'
// import the above classes to use them in the the optional styling section that has been commented out

// Inside the outer div, put the following...
// <div className={classes.Logo}>
    // <BurgerLogo />
// </div> 

const sideDrawer = (props) => {

   return ( 
       <>
        <Backdrop  showModal />
        <div className={classes.SideDrawer}>
            <BurgerLogo  height='10%' margin='4rem'/> 
            <nav>
                <NavigationItems />
            </nav>

        </div>
        </>
   )};

export default sideDrawer;