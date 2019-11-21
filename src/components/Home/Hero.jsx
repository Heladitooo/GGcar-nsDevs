import React from 'react';
import '../../assets/styles/Home/Hero.scss'

const Hero = () => {
    return(
        <section className="hero">
            <img className="hero__img" src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" alt="Maps"/>
            <div className="hero__div"></div>
            <h1 className="hero__h1">Llevandote a tu <br/> destino</h1>
        </section>
    )
}

export default Hero;