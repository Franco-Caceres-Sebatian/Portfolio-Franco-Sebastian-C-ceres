import React from 'react';
import '../Portfolio/Portfolio.css'
import imagenesrym from '../../assets/rymjpg.jpg'
import certific from '../../assets/certificado-nuevo.jpg'
import pdfcer from '../../../public/Franco Caceres corregido.pdf'


const seleccion1 = document.getElementById('certificado')





const Portfolio = () => {
    return (
        <div className='conteiner-portfolio'>
            <div className='div-porselec'>
                <div className='div-portfolio'>
                    <h2 className='portafolio'>Portafolio</h2>
                    <p className='parrafo-portfolio'>Aquí se encuentra todos mis trabajos, los pueden apreciarlos y espero que sea de su total agrado.</p>
                </div>
                <div className='div-selector'>
                    <a href="" className='selectores'>Todo</a>

                    <a href="" className='selectores'>Mis proyectos</a>

                    <a href="" className='selectores'>Certificaciones</a>

                </div>
            </div>
            <div className='div-carrusel'>
                <div id='certificado'>
                    <a href={pdfcer} target='blank'>
                        <img className='cert' src={certific} alt="certificacion Frond end" />
                    </a>
                </div>
                <div id='pagina'>
                    <a href="https://franco-sebastian-caceres-proyectofinal-rickandmorty.vercel.app/" target='blank'>
                        <img className='rym' src={imagenesrym} alt="imagen rym" />
                    </a>
                </div>
            </div>
            <div className='div-git'>
                <a href='https://github.com/Franco-Caceres-Sebatian' target='blank' className='github'  >Mi GitHub</a>
            </div>

        </div>


    )
}

export { Portfolio }