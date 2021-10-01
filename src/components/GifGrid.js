//llamado por GifExpertApp.js

import { GifGridItem } from './GifGridItem';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'


// category = elemento recibido de gifExpertApp q 
// a su vez es recibido por AddCategory.
export const GifGrid = ({category}) => {

    //importamos el hooks (state) y desestructuramos.
    // data:images se renombra a data com images.
    const { data:images , loading } = useFetchGifs( category );


    // muestro el contenido de images
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                    {
                        images.map( img => (

                            //llamo a este componente y 
                            //envio al programa GifGridItem todos los datos de images.
                            <GifGridItem  
                                key={img.id}
                                {...img} // el ... = Convierte un array (img) o un objeto en el conjunto de valores.
                            />
                        ))
                    }
                </div>
        </>
    )
}
