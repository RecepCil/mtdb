import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import firebaseDb from "../firebase";

const Movies = () => {
  var [movieObjects, setMovieObjects] = useState({});
  var [selectedMovieId, setSelectedMovieId] = useState("");

  useEffect(() => {
    firebaseDb.child("movies").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setMovieObjects({
          ...snapshot.val(),
        });
      else setMovieObjects({});
    });
  }, []); // similar to componentDidMount

  const addOrEdit = (obj) => {
    if (selectedMovieId === "")
      firebaseDb.child("movies").push(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setSelectedMovieId("");
        }
      });
    else
      firebaseDb.child(`movies/${selectedMovieId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setSelectedMovieId("");
        }
      });
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`movies/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          setSelectedMovieId("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Movie Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <MovieForm {...{ addOrEdit, selectedMovieId, movieObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Movie Name</th>
                <th>Rating</th>
                <th>Director</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(movieObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{movieObjects[id].movieName}</td>
                    <td>{movieObjects[id].rating}</td>
                    <td>{movieObjects[id].director}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setSelectedMovieId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="far fa-trash-alt" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Movies;
