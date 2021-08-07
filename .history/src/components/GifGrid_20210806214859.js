
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const state = useFetchGifs();

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category]);


    return (
        <>
            <h3 className="text-xl font-bold my-2 text-black">{category}</h3>
            {/* <div className="mx-5 flex flex-row flex-wrap"> */}
            {/* <div className=" mx-auto w-full md:container md:flex md:flex-wrap md:gap-5 border-transparent md:border-4 md:border-gray-600 p-4 md:bg-gray-200">

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}

        </>
    )
}
