import React, { Fragment } from 'react'
// import Aux from '../../hoc/Aux' if I want to use <Aux></Aux>
// <Aux></Aux> is same as <></> if you import the named component { Fragment } from 'react' as well.
import classes from '../../App.module.css';

const layout = ( props ) => (
    //<Aux>
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}> 
            {props.children}
        </main>
    </>
    //</Aux>
)

export default layout