// App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Table from "./components/Table";
import Games from "./components/Games";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Table />
        <Games />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

