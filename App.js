import React, { Component } from "react";
import TableLeague from "./table-league.js";
import MatchesList from "./matches-list.js";

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
