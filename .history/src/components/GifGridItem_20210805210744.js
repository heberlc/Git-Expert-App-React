export const GifGridItem = ({ title, url }) => {

    return (
        <div className="content-center">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
