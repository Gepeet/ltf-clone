import './Hero.css'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { SliderData } from './Dummydata';
import { useState } from 'react';

//mass
//https://i.ytimg.com/vi/vZYyLI2F53E/maxresdefault.jpg
//i feel u2
//https://asset-ent.abs-cbn.com/shows/ifeelu/I-Feel-U.jpg
//teleradyo
//https://img.tfc.tv/xcms/categoryimages/2089/Live_2020_Teleradyo692x390.jpg

//we rise together
//https://img.tfc.tv/xcms/categoryimages/6351/TFCtv-VIDEOPLAYERTHUMBNAIL-692x390-updated.jpg

//tv patrol
//https://pbs.twimg.com/media/EjvunIvUwAABfiJ.jpg


export default function Hero({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;


    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
       
    };

    const prevSlide = () => {
        setCurrent (current === 0 ? length -1 : current - 1);
    };

    console.log(current);

    return (
        <div className="hero">
            <KeyboardArrowLeftIcon className="hero__prev btn" onClick={prevSlide}/>
                {SliderData.map((sample, index) => {
                    return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && (
                                <img src={sample.image} alt="" />                 
                           
                       )} 
                    </div>
                    )
                })}
             <button className="hero__btn">WATCH NOW</button>
            <KeyboardArrowRightIcon className="hero__next btn" onClick={nextSlide}/>
        </div>
    )
}
