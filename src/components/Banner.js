import React, { useState, useEffect } from "react";
import secureAxios from "../config/secureAxios";
import requests from "../config/requests";
import "./Banner.css";
export default function Banner(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const bannerContent = secureAxios.get(requests.fetchNetflixOriginals);

      setMovie(
        (await bannerContent).data.results[
          Math.floor(
            Math.random() * (await bannerContent).data.results.length - 1
          )
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1)+"...":str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
