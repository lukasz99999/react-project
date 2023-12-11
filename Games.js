// Games.js
import React from "react";
import { Table, TableBody, TableHeader, TableRow } from "react-bootstrap";

interface GamesProps {
  games: Array<{
    date: string;
    round: number;
    homeTeam: {
      name: string;
    };
    awayTeam: {
      name: string;
    };
    homeScore: number;
    awayScore: number;
  }>;
}

const Games = ({ games }) => {
  return (
