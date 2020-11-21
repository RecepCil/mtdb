import React from "react";
import "./reset.css";
import "./App.css";
import MovieManagement from "./components/MovieManagement";
import Row from "./components/Row";
import Banner from "./components/Banner";
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
          <Banner />
          <Row title="Watched Movies" status={MovieStatus.Watched}></Row>
          <Row title="Watch List" status={MovieStatus.UnWatched}></Row>
        </>
      )}
    </div>
  );
}

export default App;
