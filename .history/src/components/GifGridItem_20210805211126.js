export const GifGridItem = ({ title, url }) => {

    return (
        <div className="content-center border-2 rounded-md">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
