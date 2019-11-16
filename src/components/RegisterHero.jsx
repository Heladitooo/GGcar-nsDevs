import React from 'react';
import '../assets/styles/RegisterBasic.scss';
import RegisterBasic from './RegisterBasic';
import '../assets/styles/Register.scss';

const RegisterHero = () => {
    return(
        <section className="hero">
        <img className="hero__background" src="https://patch.com/img/cdn/users/127241/2015/11/raw/2015115649d6a3ca281.jpg" alt="saludo"/>
            <div className="hero--gradient">
                <RegisterBasic/>
            </div>
    </section>
    )
}

export default RegisterHero;