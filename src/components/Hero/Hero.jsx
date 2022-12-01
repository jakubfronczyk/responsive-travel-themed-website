import React from 'react'
import Button from '../../UI/Button/Button'
import coverVideo from './../../assets/cover.mp4'
import classes from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={classes.container}>
            <video muted loop className={classes.video} id={"video"} src={coverVideo}></video>
            <div className={classes.hero}>
                <div className={classes.hero__content}>
                    <h1 className={classes.hero__content__title}>The tropics are wainting</h1>
                    <span className={classes.hero__content__tagline}>
                        Let us know when you're finished packing
                    </span>
                    <p className={classes.hero__content__description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptu
                    </p>
                    <div className={classes.hero__content__cta}>
                        <Button>Book Now</Button>
                        <Button outline>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero