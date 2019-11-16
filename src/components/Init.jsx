import React from 'react';
import '../assets/styles/Init.scss';
import { Link } from 'react-router-dom';

const Init = () => {
    return(
        <section className="init">
            <div className="init-div">
                <h1 className="init-div__hq">Asi que... <br/> Porque no pides tu primer viaje</h1>
                <Link to="/new-travel"><button className="init__button">Pedir viaje!</button></Link>

            </div>
        </section>
    )
}

export default Init;