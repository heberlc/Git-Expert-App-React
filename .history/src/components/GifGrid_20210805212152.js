import { useEffect, useState } from 'react';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=4ZL9V2O52rnn6Dcza2ui2YB49hEka93q`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }


    return (
        <>
            <div className="mx-5 flex flex-row">
                <h3 className="text-xl font-bold my-2">{category}</h3>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>
    )
}
