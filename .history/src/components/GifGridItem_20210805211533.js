export const GifGridItem = ({ title, url }) => {

    return (
        <div className="content-center border-2 rounded-md mb-2 mr-2 overflow-hidden">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
