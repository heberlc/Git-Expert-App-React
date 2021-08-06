export const GifGrid = ({ category }) => {

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=4ZL9V2O52rnn6Dcza2ui2YB49hEka93q`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        console.log(data);
    }

    getGifs();

    return (
        <>
            <div>
                <li className="text-2xl">{category}</li>
            </div>

        </>
    )
}
