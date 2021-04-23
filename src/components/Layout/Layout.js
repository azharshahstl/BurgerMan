import React, { Fragment } from 'react'
// import Aux from '../../hoc/Aux' if I want to use <Aux></Aux>
// <Aux></Aux> is same as <></> if you import the named component { Fragment } from 'react' as well.
import classes from '../../App.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = ( props ) => (
    //<Aux>
    <>
        <Toolbar /> 
        <SideDrawer />
        <main className={classes.Content}> 
            {props.children}
        </main>
    </>
    //</Aux>
)

export default layout