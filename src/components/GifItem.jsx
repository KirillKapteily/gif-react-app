import "../style/gifitem.scss"

export default function GifItem({ id, url, title }) {
    return (
        <li className="gif__item">
            <img src={url} alt={title} width='150'/>
            <a href={url}>Original</a>
            <h4>{title}</h4>
        </li>
    )
}