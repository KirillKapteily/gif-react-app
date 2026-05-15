export default function GifItem({ id, url, title }) {
    return (
        <li>
            <img src={url} alt={title} />
            <a href={url}>Original</a>
            <h3>{title}</h3>
        </li>
    )
}