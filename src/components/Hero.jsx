import React from 'react';
import '../assets/styles/Hero.scss';
import RegisterBasic from './RegisterBasic';

const Hero = () => {
    return(
        <section className="hero">
        <img className="hero__background" src="https://patch.com/img/cdn/users/127241/2015/11/raw/2015115649d6a3ca281.jpg" alt="saludo"/>
            <div className="hero--gradient">
                <RegisterBasic/>
            </div>
    </section>
    )
}

export default Hero;