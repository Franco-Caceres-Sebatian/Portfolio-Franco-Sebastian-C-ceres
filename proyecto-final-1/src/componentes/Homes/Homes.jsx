import React from 'react';
import '../Homes/Homes.css';
const Homes = () => {
    return (
        <div>
            <div className='div-conteiner-bienvenido'>
                <div className='div-bienvenido'>
                    <h2 className='bien'>¡Bienvenido! SOY</h2>
                    <h1 className='mi-nombre'>Franco Cáceres</h1>
                    <strong>
                    <p className='desarrollo'>Desarollador Front end</p>
                    </strong>
                </div>
                <div className='div-parrafo'>
                    <p>
                        Mi nombre es Franco y soy desarrollador web hace un año. Me a enamorado el mundo de la programacion desde mi primer contacto con este en la escuela secundaria, cuando di mis primeros pasos trabajando con programas de aprendizaje como Pseint y Visual Basic.
                        Tuve muchos trabajos, desde chofer, atencion al publico y albañil, hasta que decidi dar un giro a mi vida y dedicarme a lo que realmente me apasiona. Actualmente estoy certificado como desarrollador Front end y mi proximo objetivo sera ser Full Stack. 
                    </p>
                </div>

            </div>

            <div className='referencias'>
                <div className='div-referencia1'>
                   <strong> <p className='p-a'>02</p></strong>
                    <p className='p-b'>Proyectos </p>
                </div>
                <div className='div-referencia2'>
                <strong> <p className='p-a'>00</p></strong>
                    <p className='p-b'>Clientes</p>
                </div>
                <div className='div-referencia1'>
                <strong> <p className='p-a'>02</p></strong>
                    <p className='p-b'>Años de</p>
                    <p>experiencia</p>
                </div>
                <div className='div-referencia2'>
                <strong> <p className='p-a'>04</p></strong>
                    <p className='p-b'>Lenguajes</p>
                </div>
            </div>
        </div>
    )
}

export { Homes }