import GifItem from "./GifItem"

export default function GifList({ gifs =[] }) {
    return (
        <ul>
            {
                gifs.map((gif) => (
                    <GifItem
                        key={gif.id}
                        url={gif.images.fixed_height.url}
                        title={gif.title}
                    />
                ))
            }
        </ul>
    )
}