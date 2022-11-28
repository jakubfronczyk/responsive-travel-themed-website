import React from 'react'
import classes from './Button.module.scss'

const Button = ({outline, children}) => {
    return (
        <button className={`${classes.button} ${outline ? classes.outline : ""}`}>
            {children}
        </button>
    )
}

export default Button