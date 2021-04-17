import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const summary = Object.keys(props.ingredients).map(ingredkey => {
        return (<li style={{listStyleType:'none'}}>{ingredkey}: {props.ingredients[ingredkey]}</li>)
    })

    return (
        <Aux>
            <h2>Your Completed Order for Review</h2>
            <ul>
                {summary}
            </ul>
            <p>Continue with Checkout?</p>
        </Aux>
    )
}

export default orderSummary;