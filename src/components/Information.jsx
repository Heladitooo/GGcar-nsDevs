import React from 'react';
import '../assets/styles/Information.scss'

const Information = () => {
    return(
        <section className="information">
            <div className="information__1">
                <img src="https://images.vexels.com/media/users/3/145581/isolated/preview/5bc4cfaada0c04dcd3228fb386b909d1-silueta-de-vista-frontal-de-coche-de-ciudad-by-vexels.png" alt=""/>
                <p>Somos Rapidos, nuestros <br/>
                    conductores estan<br/>
                    capacitados para lleguar a <br/>
                    su destino lo mas rapido <br/>
                    posible de forma segura.
                </p>
            </div>
            <div className="information__2">
                <p>Somos Seguros!, nuestros <br/>
                conductores pasan por pruebas donde se <br/>
                    conoce que tipo de persona<br/>
                    es al volante!<br/>
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/en/b/bb/Male_Bathroom_Symbol.png" alt=""/>

            </div>
        </section>
    )
}

export default Information;