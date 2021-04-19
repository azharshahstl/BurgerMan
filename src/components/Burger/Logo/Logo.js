import React from 'react';
// import burgerImage from '../../../assets/images/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg'
import burgerImage from '../../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const burgerLogo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerImage} alt="Burger" />
    </div>
);

export default burgerLogo;