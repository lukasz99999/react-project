import React, { useState, useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "react-bootstrap";

const TableMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://php74.appgo.pl/sport_api/api/public/api/games?page=1&onPage=5&orderDirection=desc&orderBy=round"
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchData();
  }, []);

  return (
    <ListGroup>
      {matches.map((match, index) => (
        <ListGroupItem key={index}>
          <ListGroupItemHeading>
            {match.round} - {match.date}
          </ListGroupItemHeading>
          <ListGroupItemText>
            {match.homeTeam} {match.homeScore} - {match.awayTeam} {match.awayScore}
          </ListGroupItemText>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TableMatches;
