import React from 'react';
import classes from './Modal.module.css'

const modal = (props) => {

    return (
        <div className={classes.Modal}
             style={{transform: props.showModal ? 'TranslateY(0)' : 'TranslateY(-100vh)',
                     opacity: props.showModal ? '1' : '0'}}>
            {props.children}
        </div>
    )
}

export default modal