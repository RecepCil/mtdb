import React, { useEffect, useState } from "react";
import ref from "../firebase";
import "./Banner.css";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);
  let moviesRef = ref.child("movies");
  let movieKeys = [], movieList = [];
  const photoUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    moviesRef.on("value", (snapshot) => {
      if (snapshot.val() == null) {
        setBannerMovie({});
      } else {
        movieList = getMovieList(snapshot);
        movieKeys = Object.keys(movieList).map((key) => {
          return key;
        });

        setBannerMovie(
          movieList[getRandomMovieKey()]
        );
      }
    });
  }, []);

  let getMovieList = (snapshot) => {
    let key = Object.keys(snapshot)[0];
    return snapshot[key].val();
  }

  let getRandomMovieKey = () => {
    var randomIndex = Math.floor(Math.random() * movieKeys.length);
    return movieKeys[randomIndex];
  };

  let truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${photoUrl}/${bannerMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{bannerMovie.movieName}</h1>
        <h1 className="banner_description">
          {truncate(bannerMovie?.comment, 150)}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">
            <svg viewBox="0 0 24 24">
              <path d="M6 4l15 8-15 8z" fill="currentColor"></path>
            </svg>
            <a>Watched</a>
          </button>
          <button className="banner_button">
            <svg viewBox="0 0 24 24">
              <path
                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                fill="currentColor"
              ></path>
            </svg>
            <a>Watch List</a>
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
