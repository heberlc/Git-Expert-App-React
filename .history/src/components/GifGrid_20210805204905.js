import { useEffect, useState } from 'react';

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
            <div>
                <h3 className="text-2xl">{category}</h3>
                <ol className="list-decimal">
                    {
                        images.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.title}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>

        </>
    )
}
