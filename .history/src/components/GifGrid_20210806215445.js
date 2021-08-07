
// import { GifGridItem } from './GifGridItem';


import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { loading } = useFetchGifs();



    return (
        <>
            <h3 className="text-xl font-bold my-2 text-black">{category}</h3>

            {loading ? 'Cargando...' : 'Data cargda'}
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
