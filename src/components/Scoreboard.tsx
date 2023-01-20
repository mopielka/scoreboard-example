import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, {useState} from "react";
import type {Game, Scoreboard as ScoreboardType} from "@mopielka/sportradar-scoreboard/dist/types";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import Button from "@mui/material/Button";
import {finishGame} from "../reducers/scoreboard";
import {UpdateScoreModal} from "./UpdateScoreModal";


export const Scoreboard: React.FC = () => {
  const scoreboard: ScoreboardType = useAppSelector((state) => state.scoreboard.scoreboard);
  const dispatch = useAppDispatch();

  const [updateScoreGame, setUpdateScoreGame] = useState<Game|null>(null);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Scoreboard">
          <TableHead>
            <TableRow>
              <TableCell>Home team</TableCell>
              <TableCell>Home score</TableCell>
              <TableCell>Away score</TableCell>
              <TableCell>Away team</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreboard.map((game) => (
              <TableRow key={game.id}>
                <TableCell>{game.homeTeamName}</TableCell>
                <TableCell>{game.homeScore}</TableCell>
                <TableCell>{game.awayScore}</TableCell>
                <TableCell>{game.awayTeamName}</TableCell>
                <TableCell>
                  <Button onClick={() => setUpdateScoreGame(game)}>Update score</Button>
                  <Button onClick={() => dispatch(finishGame({ gameId: game.id }))}>Finish game</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      { updateScoreGame && <UpdateScoreModal game={updateScoreGame} onComplete={() => setUpdateScoreGame(null)} /> }
    </>
  );
}
