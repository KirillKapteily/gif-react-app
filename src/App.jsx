import axios from "axios";
import GifList from "./components/GifList";
import GifSearch from "./components/GifSearch";
import Loader from "./components/Loader";
import './App.css';
import { useState, useEffect } from "react";
import Button from "./components/Button";

axios.defaults.baseURL = "https://api.giphy.com/v1";
// 7anUM83wtrzMvcmC0EO2KLsug7cxIiRd - API
// https://api.giphy.com/v1/stickers/search?api_key=7anUM83wtrzMvcmC0EO2KLsug7cxIiRd&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips
//   const response = await axios.get(`/stickers/search?api_key=7anUM83wtrzMvcmC0EO2KLsug7cxIiRd&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(25);

  const loadGifs = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/stickers/search?api_key=7anUM83wtrzMvcmC0EO2KLsug7cxIiRd&q=${query}&limit=${pages}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
      setGifs(response.data.data);

      setIsLoading(false);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const hanndleSearch = async (event, input) => {
    event.preventDefault();
    setSearchQuery(input)
    loadGifs(input);
  }

  const loadMore = async () => {
    setPages(p => p + 5);
    console.log(pages);
    loadGifs()

  }

  useEffect(() => {
    setSearchQuery("Eras Tour");
    loadGifs();
  }, [])

  return (
    <>
      <GifSearch onSubmit={hanndleSearch} />
      {gifs.length > 0 ? <GifList gifs={gifs} /> : <p>Search for something else</p>}

      {isLoading && <Loader />}
      {err && <p>"I think there's been a glitch, oh, yeah"</p>}
      {gifs.length > 0 ? <Button onClick={loadMore} /> : ""}


    </>
  )
}

export default App
