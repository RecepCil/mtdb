import React from "react";
import MovieManagement from "./components/MovieManagement";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import MovieStatus from "./enums/MovieStatus";
import { useSelector } from 'react-redux'; 
import "./reset.css";
import "./App.css";

function App() {
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="app">
      {isLogged ? (
        <div className="col-md-8 offset-md-2">
          <MovieManagement />
        </div>
      ) : (
        <>
          <Nav />
          <section  id='banner'>
            <Banner />
          </section>
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
