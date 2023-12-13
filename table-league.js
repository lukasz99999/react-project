import React, { useState, useEffect } from "react";
import { Table, TableColumn } from "react-bootstrap";

const TableLeague = () => {
  const [league, setLeague] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://php74.appgo.pl/sport_api/api/public/api/table");
      const data = await response.json();
      setLeague(data);
    };
    fetchData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Miejsce</th>
          <th>Drużyna</th>
          <th>Punkty</th>
          <th>Mecze wygrane</th>
          <th>Mecze remisowane</th>
          <th>Mecze przegrane</th>
        </tr>
      </thead>
      <tbody>
        {league.map((team, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{team.name}</td>
            <td>{team.points}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Razem</th>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableLeague;

