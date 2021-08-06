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
            <h3 className="text-xl font-bold my-2">{category}</h3>
            {/* <div className="mx-5 flex flex-row flex-wrap"> */}
            <div className=" mx-auto w-full md:container md:flex md:flex-wrap md:gap-5 border-8 md:border-gray-600 p-8 md:bg-gray-200">

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
