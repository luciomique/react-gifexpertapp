//es llamado por GifGrids.js .

// Este es un custom hook q es como un subprograma 
import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
      data: [],
      loading: true
  }); 

  useEffect( () => {

    getGifs( category )
        .then (imgs => {

            setTimeout( () => {
                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                });

            },3000);
        })

  }, [category])

  // state = data: [], loading: true
  return state;
}
