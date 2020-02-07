import React from "react";
import { Dog } from "./Dog/Dog";
import { Cat } from "./Cat/Cat";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Dog />
          <Cat />
        </div>
      </header>
    </div>
  );
}

export default App;
