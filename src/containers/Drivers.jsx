import React from 'react';
import DriversCard from '../components/DriversCard';
import '../assets/styles/Drivers.scss';
import { Link } from 'react-router-dom';

const Drivers = () => {
    return(
        <section className="drivers">
            <Link to="/maps">
                <DriversCard information="lol" carImage="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" image="https://thumbnails.texastribune.org/8cuOumuAvfs8K7jqN8_HZO_egj8=/850x570/smart/filters:quality(80)/https://static.texastribune.org/media/files/bab7bd3f220b3b5c7039d5cb3a0b2ce5/Trump%20Dallas%20101719%20REUTERS%2001%20TT.jpg" name="DonaldTruck"/>
            </Link>
            <Link to="/maps">
                <DriversCard information="lol" carImage="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" image="https://thumbnails.texastribune.org/8cuOumuAvfs8K7jqN8_HZO_egj8=/850x570/smart/filters:quality(80)/https://static.texastribune.org/media/files/bab7bd3f220b3b5c7039d5cb3a0b2ce5/Trump%20Dallas%20101719%20REUTERS%2001%20TT.jpg" name="DonaldTruck"/>
            </Link>
            <Link to="/maps">
                <DriversCard information="lol" carImage="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" image="https://thumbnails.texastribune.org/8cuOumuAvfs8K7jqN8_HZO_egj8=/850x570/smart/filters:quality(80)/https://static.texastribune.org/media/files/bab7bd3f220b3b5c7039d5cb3a0b2ce5/Trump%20Dallas%20101719%20REUTERS%2001%20TT.jpg" name="DonaldTruck"/>
            </Link>
            <Link to="/maps">
                <DriversCard information="lol" carImage="https://f1.media.brightcove.com/8/1078702682/1078702682_6004950245001_6004956161001-vs.jpg?pubId=1078702682&videoId=6004956161001" image="https://thumbnails.texastribune.org/8cuOumuAvfs8K7jqN8_HZO_egj8=/850x570/smart/filters:quality(80)/https://static.texastribune.org/media/files/bab7bd3f220b3b5c7039d5cb3a0b2ce5/Trump%20Dallas%20101719%20REUTERS%2001%20TT.jpg" name="DonaldTruck"/>
            </Link>

              
        </section>
    )
}

export default Drivers;