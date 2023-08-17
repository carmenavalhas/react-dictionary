import React, { useState } from "react";
import Results from "./Results.js";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
 
  function search() {
    //Documentation:https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load () {
    setLoaded(true);
    search();
  }

  if (loaded) {

  return (
    <div className="Dictionary">
     <section>
      <h2 className="mb-4 text-center">What word do you want to look up?</h2>
      <form className="text-center" onSubmit={handleSubmit}>
            

      <input 
      className="text-center text-muted" 
      type="search" 
      onChange={handleKeywordChange}
      defaultValue={props.defaultKeyword} 
      placeholder="i.e. plant, wine, sunset, coding"
      />
      
      </form>
      </section>
      
      <Results results={results} />
      <Photos photos={photos} />
  </div>
  );
  } else { 
    load();
    return "Loading...";
}
}

