import { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  let [movie, setMovie] = useState(null);

  const getMovie2 = async () => {};
   /*
    1. Create an array of some movie titles (5-10)
    2. Use the useEffect hook to randomly select a 
      movie title and fetch the data for that movie
  */
 let arr=["avatar","help","avengers","duna","henry","thor","jungle","lost","up"]

      useEffect(() => {
        let ranIndex = Math.floor(Math.random()* arr.length)
        getMovie(arr[ranIndex]);
      }, []);

  async function getMovie(title) {
    console.log(title);

    const key = process.env.REACT_APP_KEY;
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${title}`;

    // await (await fetch(url)).json()

    try {
      let response = await fetch(url); // returns a Promise
      let data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log("something went wrong");
    }

    console.log("test");

    // async / await

    // async / await

    // try / catch

    // callback hell
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => setMovie(data))
    //   .catch((error) => console.error('Error:', error))

    // except for 400, 401, 500

    console.log("test");
  }

  if (movie) {
    return (
      <div className="App">
        <MovieDisplay movie={movie} />
        <Form getMovie={getMovie} />
      </div>
    );
  } else {
    // if movie is null
    return (
      <div>
        <h1>Search for a movie</h1>
        <Form getMovie={getMovie} />
      </div>
    );
  }
}

export default App;
