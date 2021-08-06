export const GifGridItem = ({ title, url }) => {

    return (
        // <div className="content-center border-2 rounded-md mb-2 mr-2 overflow-hidden">
        <div className=" my-2 text-center bg-white mx-auto rounded-2xl  border-4 border-gray-800 py-5">
            <img className=" w-full md:max-h-44 bg-cover" src={url} alt={title} />
            <p className="text-center p-1">{title}</p>
        </div>
    )
}