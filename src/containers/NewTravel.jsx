import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NewTravel.scss';

const NewTravel = () =>
{
    return(
        <section className="newTravel">
            <div className="newTravel-container">
                <h1>Pide un viaje!</h1>
                <div className="newTravel-text">
                    <h4 className="newTravel-text__general">Lugar de inicio</h4>
                    <input className="newTravel-text__input" type="text"/>
                </div>
                <div className="newTravel-text">
                    <h4 className="newTravel-text__general">A donde quieres ir?</h4>
                    <input className="newTravel-text__input" type="text"/>
                </div>
                <Link to="/drivers">
                <button>Calcular!</button>
                </Link>
            </div>
            
        </section>
    )
}

export default NewTravel;