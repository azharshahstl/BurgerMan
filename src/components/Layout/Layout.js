import React from 'react'
import Aux from '../../hoc/Aux'
// <Aux></Aux> is same as <Fragment></Fragment> if you import the named component { Fragment } from 'react' as well.
// more comments

const layout = ( props ) => (
    <Aux><div>Toolbar, SideDrawer, Backdrop</div>
    <main> 
        {props.children}
    </main>
    </Aux>
)

export default layout