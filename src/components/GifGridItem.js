// llamado por GifGrid.js

// recibe las imagenes y las muestra.
import React from 'react'

// recibo los datos de GifGrids.js almacenada en img (...) .
export const GifGridItem = ({id, title, url}) => {

    // muestro el resultado.
    return (
        // card = clase para el css
        // animate es la animacion.
        <div className="card animate__animated animate__fadeIn"> 
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
