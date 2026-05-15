import axios from "axios";
import GifSearch from "./components/GifSearch";
import GifList from "./components/GifList";
import './App.css';
import { useState, useEffect } from "react";

axios.defaults.baseURL = "https://api.giphy.com/v1";
// 7anUM83wtrzMvcmC0EO2KLsug7cxIiRd - API
// https://api.giphy.com/v1/stickers/search?api_key=7anUM83wtrzMvcmC0EO2KLsug7cxIiRd&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const LoadGifs = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get(`/stickers/search?api_key=7anUM83wtrzMvcmC0EO2KLsug7cxIiRd&q=${searchQuery}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
      console.log(searchQuery);
      
      setGifs(response.data.data);
      setIsLoading(false)
    } catch (err) {
      console.log(err);
      setErr(err);
    } finally {
      setIsLoading(false)
    }
  }

const hanndleSearch = async (event, input) => {
  event.preventDefault();
  setSearchQuery(input)
    LoadGifs();
}

  useEffect(() => {
    LoadGifs();
  }, [])

  return (
    <>
      <GifSearch onSubmit={hanndleSearch}/>
      <GifList gifs={gifs}/>
    </>
  )
}

export default App
