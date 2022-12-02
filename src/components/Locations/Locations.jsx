import React from 'react'
import classes from './Locations.module.scss'
import BoraBoraJPG from './../../assets/borabora.jpg'
import MaledivesJPG from './../../assets/maledives.jpg'
import CaboSanLucasJPG from './../../assets/cabosanlucas.jpg'
import CroatiaJPG from './../../assets/croatia.jpg'
import GreeceJPG from './../../assets/greece.jpg'
import AlbaniaJPG from './../../assets/albania.jpg'
import { IoLocationOutline } from 'react-icons/io5'
// import { BsArrowRight } from 'react-icons'

const locationData = [
    {id: 1, location: "Bora Bora", isFeatured: true, img: BoraBoraJPG},
    {id: 2, location: "Maledives", isFeatured: true, img: MaledivesJPG},
    {id: 3, location: "Cabo San Lucas", isFeatured: false, img: CaboSanLucasJPG},
    {id: 4, location: "Croatia", isFeatured: false, img: CroatiaJPG},
    {id: 5, location: "Greece", isFeatured: false, img: GreeceJPG},
    {id: 6, location: "Albania", isFeatured: true, img: AlbaniaJPG},
]

const Locations = () => {
    return (
        <div className={classes.container}>
            <div className={classes.locations}>
                <div className={classes.locations__content}>
                    <h2 className={classes.locations__content__title}>Discover an Island</h2>
                    <div className={classes.locations__content__gallery}>
                        {locationData.map(({id, location, isFeatured, img}) => (
                            <div className={classes.gallery__item} key={id}>
                                <img
                                    src={img} 
                                    alt={location} 
                                    className={classes.gallery__item__img}
                                />
                                <div className={classes.overlay} />
                                <div className={classes.gallery_item_content}>
                                    <IoLocationOutline />
                                    <h2 className={classes.gallery_item_content_location}>
                                        {location}
                                    </h2>
                                </div>
                                {isFeatured && (
                                    <div className={classes.gallery_item_tag}>Featured</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className={classes.locations__content__viemore}>
                        <a href='/'>
                            {/* view more <BsArrowRight /> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations