import React from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.showModal !== this.props.showModal || nextProps.children !== this.props.children
    }
    // We are checking to see if the Modal changes and if it does,
    // since it wraps the OrderSummary Component, that will update.
    //  And we don't want to update the order summary when people 
    // are making their burger, only when we display the order
    // summary modal. 

    render(){
        return(
        <Aux>
            <Backdrop show={this.props.showModal} close={this.props.closeModal}/>
            <div className={classes.Modal}
                style={{transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showModal ? '1' : '0'}}>
                {this.props.children}
            </div>
        </Aux>
        )
    }
        
    
}

export default Modal