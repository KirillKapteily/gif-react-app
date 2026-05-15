import { useState } from "react";

export default function GifSearch({onSubmit}) {
const [input, setInput] = useState('');

const hanndleInput = (event) =>{
onSubmit(event, input); 
}

    return (
       <form onSubmit={hanndleInput}>
         <input type="text" 
         placeholder="Search for gifs!!!"
         value={input}
         onChange={(event) => setInput(event.target.value)}
         />
            <button type="submit">Search</button>
       </form>
    )
}