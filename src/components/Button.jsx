import "../style/button.scss"

export default function Button({onClick}) {
    return(
        <button onClick={onClick} className="load-more">Load More</button>
    )
}