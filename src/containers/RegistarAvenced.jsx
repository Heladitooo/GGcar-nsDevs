import React from 'react';
import '../assets/styles/RegisterAvanced.scss';

const RegisterAvanced = () => {
    return(
        <>
            
                    <section className="hero-registrate" action="">
                        <form className="hero-registrate__formulario" action="">
                        <h1>Registrate</h1>
                        <div className="hero-registrate__formulario--container">
                            <div>
                                <input className="username" type="text" placeholder="nombre..."/>
                                <input className="email" type="email" placeholder="tu correo..."/>
                                <input className="password" type="password" minLength="5" placeholder="contraseña..."/>
                                <input className="passwordRepeat" type="password" minLength="5" placeholder="contraseña otra vez..."/>
                                <input className="passwordRepeat" type="password" minLength="5" placeholder="tu tipo de sangre..."/>
                            </div>
                            <div>
                                <input className="username" type="text" placeholder="contraseña targeta de credito..."/>
                                <input className="email" type="email" placeholder="cordenadas EXACTAS de tu casa..."/>
                                <input className="password" type="password" minLength="5" placeholder="lisencia para bombas..."/>
                                    <input className="passwordRepeat" type="password" minLength="5" placeholder="conoces a john cena?"/>
                                    <input className="dates" type="date"/>   
                            </div>   
                        </div>     
                        <button className="Registrame">Registrame</button> 
                        </form>
                        <section className="hero-registrate__iniciarSesion">
                            <p>Ya haces parte de GGcar? <a href="/">Iniciar Sesion</a></p>
                        </section>
                    </section>
        </>
    )
}

export default RegisterAvanced;