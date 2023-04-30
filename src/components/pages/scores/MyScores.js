"use"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";

export default function MyScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/api/scores/mine', {
      
    })
      .then(res => res.json())
      .then(res => {
        setScores(res.scores)
      })
      .catch(error => console.error(error));
  }, [])

  return (<>
    <h1>All Scores</h1>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Game</TableCell>
          <TableCell>User</TableCell>
          <TableCell>Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
        scores.map((score, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{score.game}</TableCell>
              <TableCell>{score.user}</TableCell>
              <TableCell>{score.score}</TableCell>
            </TableRow>
          )
        })
      }
      </TableBody>
    </Table>
  </>);
}