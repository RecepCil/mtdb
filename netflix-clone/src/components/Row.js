import React, { useState, useEffect } from "react";
import ref from "../firebase";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, status }) {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="row">
      <div className="row-title"> {title}</div>
      <div className="row_posters">
        {Object.keys(movies).map((id) => {
          return (
            <img
              key={movies[id].tmdbId}
              className="row_poster"
              src={`${base_url}${movies[id].photoURL}`}
              alt={movies[id].movieName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
