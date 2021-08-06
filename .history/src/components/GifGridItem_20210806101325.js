export const GifGridItem = ({ title, url }) => {

    return (
        // <div className="content-center border-2 rounded-md mb-2 mr-2 overflow-hidden">
        <div className="text-center bg-white mx-auto rounded-2xl overflow-hidden border-4 border-gray-800">
            <img className=" max-h-10 md:max-h-44 bg-cover" src={url} alt={title} />
            <p className="text-center p-1">{title}</p>
        </div>
    )
}
