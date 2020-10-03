import React from "react";
import "./App.css";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <div className="col-md-8 offset-md-2">
        <Movies />
      </div>
    </div>
  );
}

export default App;
