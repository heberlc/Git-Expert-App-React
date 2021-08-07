
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { data: imgaes, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="text-xl font-bold my-2 text-black">{category}</h3>

            {loading && <p>Loading</p>}

            <div className=" mx-auto w-full md:container md:flex md:flex-wrap md:gap-5  p-4 ">

                {
                    imgaes.map(img => (
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
