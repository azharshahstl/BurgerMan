import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {

    // This could be a functional component
    // componentWillUpdate() {
    //     console.log('[OrderSummary] WillUpdate');
    // }

    render(){
        console.log(this.props.ingredients)
        
        const summary = Object.keys(this.props.ingredients).map(ingredkey => {
            return (
            <li style={{listStyleType:'none'}} key={ingredkey}>
                {ingredkey}: {this.props.ingredients[ingredkey]}
            </li>)
        })
    return (
        <Aux>
            <h2>Your Completed Order for Review</h2>
            <ul>
                {summary}
            </ul>
            <h3 style={{marginTop: '20px'}}>YOUR TOTAL: ${this.props.total}</h3>
            <p style={{marginTop: '20px'}}>Continue with Checkout?</p>
            <Button buttonType='Success' clicked={this.props.purchase}>CONTINUE</Button>
            <Button buttonType='Cancel' clicked={this.props.cancel}>CANCEL</Button>
        </Aux>
    )
    }
}

export default OrderSummary;