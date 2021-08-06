export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
            <img className="max-h-44" src={url} alt={title} />
            <p className="text-center p-1">{title}</p>
        </div>
    )
}
