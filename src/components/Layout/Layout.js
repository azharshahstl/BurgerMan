import React, { Fragment } from 'react'
// import Aux from '../../hoc/Aux' if I want to use <Aux></Aux>
// <Aux></Aux> is same as <></> if you import the named component { Fragment } from 'react' as well.
import classes from '../../App.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

// Layout started as a functional component.  It has been changed to a class component.
class Layout extends React.Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => 
    this.setState({showSideDrawer: false})

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })

    }

    render() {
        return (
            //<Aux>
    <>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/> 
    <SideDrawer  open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
    <main className={classes.Content}> 
        {this.props.children}
    </main>
</>
//</Aux>

        )
    }

    
}


export default Layout