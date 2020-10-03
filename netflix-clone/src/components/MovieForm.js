import React, { useEffect, useState } from "react";

const MovieForm = (props) => {
  const initialFieldValues = {
    movieName: "",
    director: "",
    year: "",
    rating: "",
    photoURL: "",
    comment: "",
    isActive: false,
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.selectedMovieId === "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.movieObjects[props.selectedMovieId],
      });
  }, [props.selectedMovieId, props.movieObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i class="fas fa-film"></i>
          </div>
        </div>
        <input
          name="movieName"
          type="text"
          value={values.movieName}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Movie Name"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          name="director"
          type="text"
          value={values.director}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Director"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i class="far fa-calendar-alt"></i>
          </div>
        </div>
        <input
          name="year"
          type="date"
          value={values.year}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Year"
        />
      </div>
      <div className="form-group input-group">
        <input
          name="rating"
          type="range"
          value={values.rating}
          onChange={handleInputChange}
          className="custom-range"
          min="0"
          max="10"
          step="0.5"
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i class="fas fa-camera-retro"></i>
          </div>
        </div>
        <input
          name="photoURL"
          type="text"
          value={values.photoURL}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Photo"
        />
      </div>
      <div className="form-group input-group">
        <textarea
          name="comment"
          value={values.comment}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Comment"
          id="address"
          cols="30"
          rows="10"
        />
      </div>
      <div className="form-group form-check">
        <input
          name="isActive"
          type="checkbox"
          value={values.isActive}
          onChange={handleInputChange}
          className="form-check-input"
        />
        <label className="form-check-label">Is Active?</label>
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.selectedMovieId === "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default MovieForm;
