import React, { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import ref from "../firebase";
import MovieStatus from "../enums/MovieStatus";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, status }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

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
      setSelectedMovie("");
    } else {
      setSelectedMovie(movie);
    }
  };

  return (
    <div className="row">
      <div className="row-title"> {title}</div>
      <div className="row_posters">
        {Object.keys(movies).map((id) => {
          return (
            <img
              key={movies[id].tmdbId}
              onClick={() => showMovieComment(movies[id])}
              className={`row_poster ${
                (movies[id].movieStatus == MovieStatus.Favorite) && "row_posterLarge"
              }`}
              src={`${base_url}${
                (movies[id].movieStatus == MovieStatus.Favorite) ? movies[id].photoURL : movies[id].backdrop_path
              }`}
              alt={movies[id].movieName}
            />
          );
        })}
      </div>
      {selectedMovie && (
        <div className="movie-detail">
          <div className="movie-detail-header">
            <div className="h5 movie-detail-title">
              {selectedMovie.movieName}
            </div>{" "}
            ({selectedMovie.year}) - {selectedMovie.director}
            <div className="movie-detail-rate">
              <StarRatings
                starRatedColor="#e50914"
                rating={selectedMovie.rating}
                numberOfStars={5}
                starSpacing={"0"}
                size={60}
              />
            </div>
          </div>
          <br />
          <div className="movie-detail-body">
            <p>{selectedMovie.comment}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
