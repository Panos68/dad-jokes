import React, { useState, useEffect } from "react";
import Axios from "axios";
import DadPic from '../dadPic.jpg';

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke()
  },[]);

  const fetchJoke = () => {
    Axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      })
        .then(res => setJoke(res.data))
        .catch(err => console.log(err));
  }

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a className="btn btn-primary text-white" onClick={fetchJoke}>
            Get Another Joke
          </a>
          <div>       
          <img src={DadPic} alt="Super dad" height="200px" style={{marginTop:"20px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
