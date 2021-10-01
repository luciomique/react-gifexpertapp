import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Rick y Morty']);

    //para agregar nuevos elementos desde el boton agregar.
    const handleAdd = () => {
        // primero me coloca todos los anteriores y luego
        // el nuevo, tambien puedo hacerlo al reves.
        //setCategories(  [...categories, 'nuevo elemento2']);
        // o ...
        //setCategories( categories => [...categories, 'nuevo elemento2']);
    }

    return (
        <>
          <h2>GifExpertApp</h2>
          
          <AddCategory setCategories={ setCategories } /> 
          <hr></hr>

          <button onClick={handleAdd}>No hago nada</button>

          <ol>
              { categories.map( 
                  (category) => ( 
                    <GifGrid
                        key = {category} 
                        category={ category }
                    />
                   ) 
                )
              }
          </ol>

        </>
    )
}
