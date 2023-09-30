import React from 'react';
import '../about/About.css'
const About = () => {
    return (
        <div className='provi'>
            <div className='conteiner-principal-about'>
                <h2 className='sobre'>Sobre mí</h2>

                <p className='p-sobre'>
                    Luego de descubrir el mundo de la programacion, Comencé a estudiar por mi cuenta y buscar cursos para lograr apreder y vivir de esto. Mis primeros pasos los di con EGG, donde realice un curso de introduccion de 6 semanas, con personas de toda latinoamerica. Actualmente me encuentro en el Silicon Misiones donde ya llevo 1 año y medio preparandome.
                    

                </p>

                <p className='p-entre'>Entre los lenguajes y bibliotecas que manejo se encuantran:</p>

                <div className='div-lenguajes'>
                    <div className='borde-div'>
                        <div className='js'>JavaScript</div>
                    </div>

                    <div className='borde-div'>
                        <div className='react'>React</div>
                    </div>

                    <div className='borde-div'>
                        <div className='html'>HTML</div>
                    </div>

                    <div className='borde-div'>
                        <div className='css'>CSS</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { About }