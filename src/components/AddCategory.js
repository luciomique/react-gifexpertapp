// llamado por GifExpertApp.js

// Lamma a la categoria que escribo en el input.
import React, {useState} from 'react'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hola Lucho');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // e.target.value = lo q escribi en el input.
    }

    // para usar el enter y no se ejecute hasta q presione el enter.
    // controlo q tenga + de 2 letras y borro el cpo input.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        // cuando das el enter (submit)...
        <form onSubmit={handleSubmit}> 

            <input
                type="text"
                value = {inputValue}
                onChange={ handleInputChange } //llamo a la funcion
            />

            <h1>{inputValue}</h1>

        </form>    
    )
}

// inputValue es la variable del cpo input.
// handleInputChange es la funcion que contiene lo que escribi.