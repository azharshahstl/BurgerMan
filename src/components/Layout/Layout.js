import React, { Fragment } from 'react'
// import Aux from '../../hoc/Aux' if I want to use <Aux></Aux>
// <Aux></Aux> is same as <></> if you import the named component { Fragment } from 'react' as well.


const layout = ( props ) => (
    //<Aux>
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main> 
            {props.children}
        </main>
    </>
    //</Aux>
)

export default layout