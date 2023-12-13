import React, { Component } from "react";
import TableLeague from "./table-league.jsx";
import MatchesList from "./matches-list.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <TableLeague />
        <MatchesList />
      </div>
    );
  }
}

export default App;
