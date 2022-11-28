import React from 'react'
import classes from './Logo.module.scss'
import LeafSVG from './../../assets/LeafSVG'

const Logo = () => {
    return (
        <a href="/" className={classes.logo}>
            <LeafSVG fillColor={"white"}/>
            <span>Tropic</span>
        </a>
    )
}

export default Logo