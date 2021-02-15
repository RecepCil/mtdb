import React, { useEffect } from "react";
import ref from "../firebase";
import StarRatings from "react-star-ratings";
import "./Banner.css";

import { useSelector, useDispatch } from 'react-redux'; 
import { addItem } from '../actions';

function Banner() {
  const bannerMovie = useSelector(state => state.selectedMovie);
  const dispatch = useDispatch();
  let moviesRef = ref.child("movies");
  let movieKeys = [], movieList = [];
  const photoUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    moviesRef.on("value", (snapshot) => {
      if (snapshot.val() == null) {
        dispatch(addItem({}));
      } else {
        movieList = getMovieList(snapshot);
        movieKeys = Object.keys(movieList).map((key) => {
          return key;
        });
        dispatch(addItem(movieList[getRandomMovieKey()]));
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
            <a>{bannerMovie.director}</a><br/>
            <a>{bannerMovie.year}</a> 
          </button>
          <button className="banner_button">
            <div className="movie-detail-rate"> 
              <StarRatings
                starRatedColor="#e50914"
                rating={bannerMovie.rating}
                numberOfStars={5}
                starSpacing={"0"}
                size={60}
              />
            </div> 
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
