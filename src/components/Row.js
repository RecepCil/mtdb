import React, { useState, useEffect } from "react";
import ref from "../firebase";
import MovieStatus from "../enums/MovieStatus";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useSelector, useDispatch } from 'react-redux'; 
import { addItem } from '../actions';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, status }) {
  const [movies, setMovies] = useState([]);   // the useState initializes the state
  const selectedMovie = useSelector(state => state.selectedMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    var moviesRef = ref.child("movies");
    moviesRef
      .orderByChild("movieStatus")
      .equalTo(status)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setMovies({
            ...snapshot.val(),
          });
        } else setMovies({});
      });
  }, []);

  const showMovieComment = (movie) => {
    if (selectedMovie && selectedMovie.tmdbId === movie.tmdbId) {
      dispatch(addItem({}));
    } else {
      dispatch(addItem(movie));
    }
  };

  return (
    <div className="row">
      <div className="row-title"> {title}</div>
      <div className="row_posters">
        {Object.keys(movies).map((id) => {
          return (
            <AnchorLink href="#banner">  
              <img
                key={movies[id].tmdbId}
                onClick={() => showMovieComment(movies[id])}
                className={`row_poster ${
                  (movies[id].movieStatus === MovieStatus.Favorite) && "row_posterLarge"
                }`}
                src={`${base_url}${
                  (movies[id].movieStatus === MovieStatus.Favorite) ? movies[id].photoURL : movies[id].backdrop_path
                }`}
                alt={movies[id].movieName}
              />
            </AnchorLink>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
