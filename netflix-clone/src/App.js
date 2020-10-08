import React from "react";
import "./App.css";
import MovieManagement from "./components/MovieManagement";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      {false ? (
        <div className="col-md-8 offset-md-2">
          <MovieManagement />
        </div>
      ) : (
        <>
          <Row
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        </>
      )}
    </div>
  );
}

export default App;
