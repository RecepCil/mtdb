import React from "react";
import "./reset.css";
import "./App.css";
import MovieManagement from "./components/MovieManagement";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import MovieStatus from "./enums/MovieStatus";

function App() {
  return (
    <div className="app">
      {false ? (
        <div className="col-md-8 offset-md-2">
          <MovieManagement />
        </div>
      ) : (
        <>
          <Nav />
          <Banner />
          <section  id='favoriteMovies'>
            <Row title="Favorite Movies" status={MovieStatus.Favorite}></Row>
          </section>
          <section  id='watchedMovies'>
            <Row title="Watched Movies" status={MovieStatus.Watched}></Row>
            </section>
          <section  id='watchList'>
            <Row title="Watch List" status={MovieStatus.UnWatched}></Row>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
