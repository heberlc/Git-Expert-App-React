export const GifGridItem = ({ title, url }) => {

    return (
        <div className="content-center border-8">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
