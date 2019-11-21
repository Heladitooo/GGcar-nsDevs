import React from 'react';
import Hero from '../components/Home/Hero';
import Information from '../components/Home/Information';
import Init from '../components/Home/Init';


const Home = () => {
    return(
        <section>
            <Hero/> 
            <Information/>
            <Init/>
        </section>
    )
}

export default Home;