import React from 'react';
// import burgerImage from '../../../assets/images/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg'
import burgerImage from '../../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

//Creating a burgerLogo component since I will use it in multiple places of the app
const burgerLogo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerImage} alt="Burger" />
    </div>
);

export default burgerLogo;