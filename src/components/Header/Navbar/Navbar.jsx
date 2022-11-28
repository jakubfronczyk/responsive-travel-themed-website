import React from 'react'
import classes from './Navbar.module.scss'
import Button from './../../../UI/Button/Button'

const Navbar = ({isMenu, menuToggle}) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
                <li onClick={menuToggle}>
                    <a href="/">Locations</a>
                </li>
                <li onClick={menuToggle}>
                    <a href="/">Pricing</a>
                </li>
                <li onClick={menuToggle}>
                    <a href="/">Learn More</a>
                </li>
            </ul>
            <Button className={classes.booknow} onClick={menuToggle}>Book now</Button>
        </nav>
    )
}

export default Navbar