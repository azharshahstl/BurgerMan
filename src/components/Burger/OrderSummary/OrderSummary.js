import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const summary = Object.keys(props.ingredients).map(ingredkey => {
        return (<li style={{listStyleType:'none'}} key={ingredkey}>{ingredkey}: {props.ingredients[ingredkey]}</li>)
    })

    return (
        <Aux>
            <h2>Your Completed Order for Review</h2>
            <ul>
                {summary}
            </ul>
            <h3 style={{marginTop: '20px'}}>YOUR TOTAL: ${props.total}</h3>
            <p style={{marginTop: '20px'}}>Continue with Checkout?</p>
            <Button buttonType='Success' clicked={props.purchase}>CONTINUE</Button>
            <Button buttonType='Cancel' clicked={props.cancel}>CANCEL</Button>
        </Aux>
    )
}

export default orderSummary;