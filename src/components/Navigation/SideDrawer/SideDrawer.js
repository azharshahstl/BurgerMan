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

    let attachedClasses = [classes.SideDrawer, classes.Close] 
        if (props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open]
        }

   return ( 
       <>
        <Backdrop  showModal={props.open}  clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <BurgerLogo  height='10%' margin='4rem'/> 
            <nav>
                <NavigationItems />
            </nav>

        </div>
        </>
   )};

export default sideDrawer;