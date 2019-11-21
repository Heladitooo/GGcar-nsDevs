import React from 'react';
import '../assets/styles/DriversCard.scss'

const DriversCard = (props) =>
{
    return(
        <div className="driversCard">
            <img className="driversCard__imageFace" src={props.image} alt=""/>
            <div className="driversCard-information">
                <h1>{props.name}</h1>
                <p>{props.information}</p>
            </div>
            <img src={props.carImage} alt="" className="driversCard__imageCar"/>
        </div>
    )
}

export default DriversCard;