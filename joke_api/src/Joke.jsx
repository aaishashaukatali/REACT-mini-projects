import { useEffect, useState } from "react";

function Joke() {
  const URL = 'https://v2.jokeapi.dev/joke/Any?type=twopart';

  let [joke, setJoke] = useState({});

  const getNewJoke = async () => {
    let format = await fetch(URL);
    let store = await format.json();
    console.log(store);
    setJoke({ setup: store.setup, punchline: store.delivery });
  };

  useEffect(() => {
    async function getNewJoke() {
      let format = await fetch(URL);
      let store = await format.json();
      console.log(store);
      setJoke({ setup: store.setup, punchline: store.delivery });
    }
    getNewJoke();
  }, []);

  return (
    <div>
      <h2>Joke!</h2>
      <div style={{padding:"1rem",borderRadius:"0.7rem",boxShadow:"1px 2px 3px lightgrey",backgroundColor:"white",border:"1px solid lightgrey"}}>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      </div><br></br>
      <button onClick={getNewJoke} style={{backgroundColor:"orange"}}>Generate Joke</button>
    </div>
  );
}

export default Joke;
