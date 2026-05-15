import GifItem from "./GifItem";
import "../style/giflist.scss"

export default function GifList({ gifs = [] }) {
    return (
        <ul className="gif__list">
            {
                gifs.map((gif) => (
                    <GifItem
                    key={gif.id}
                        id={gif.id}
                        url={gif.images.fixed_height.url}
                        title={gif.title}
                    />
                ))
            }
        </ul>
    )
}