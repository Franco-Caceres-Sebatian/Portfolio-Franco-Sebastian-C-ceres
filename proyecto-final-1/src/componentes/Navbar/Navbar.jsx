import React from 'react';
import "../Navbar/Navbar.css"


const Navbar = () => {
    return(
        <div className='navbar-conteiner'>
            
            <li><a id='al' href='#homes' >Inicio</a></li>
            
            <li><a id='al' href="#portfolio">Portfolio</a></li>
            <li><a id='al' href="#about">Sobre mi</a></li>
            <li><a id='al' href="#contact">Contactos</a></li>

            
            <a className='descarga' href="./public/Curriculum Caceres Franco.pdf" download>
            </a>
            
        </div>
    )
}

export { Navbar }