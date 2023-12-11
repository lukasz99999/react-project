import React from "react";
import { Table, TableBody, TableHeader, TableRow } from "react-bootstrap";

interface TableProps {
  teams: Array<{
    name: string;
    points: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
  }>;
}

const Table = ({ teams }) => {
  return (
    <Table striped bordered hover>
      <TableHeader>
        <TableRow>
          <th>Drużyna</th>
          <th>Punkty</th>
          <th>Mecze wygrane</th>
          <th>Remisy</th>
          <th>Mecze przegrane</th>
          <th>Bramki zdobyte</th>
          <th>Bramki stracone</th>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams.map((team) => (
          <TableRow key={team.id}>
            <td>{team.name}</td>
            <td>{team.points}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Table;