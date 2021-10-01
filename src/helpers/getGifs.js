    // llamdo por el custom hook useFetchGifs.js
    
    //trae las imagenes de la categoria y guardarlas en la var gifs.
    export const getGifs = async(category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=ZdFo3YPz0DQqibyDszojGHtAU5ypk86q`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id:    img.id,
                title: img.title,
                url:   img.images?.downsized_medium.url
            }
        }) 

        return gifs;
    }
