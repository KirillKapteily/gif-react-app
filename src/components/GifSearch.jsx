import { useState } from "react";
import "../style/gifsearch.scss";

export default function GifSearch({ onSubmit }) {
    const [input, setInput] = useState("");

    const hanndleSubmit = (event) => {
        onSubmit(event, input)
    }

    return (
        <header className="searchbar">
            <form className="SearchForm" onSubmit={hanndleSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={input}
                className="input"
                onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>
        </header>
    )
}