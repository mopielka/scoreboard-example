import React, {useState} from "react";
import {Game} from "@mopielka/sportradar-scoreboard/dist/types";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useAppDispatch} from "../hooks/redux";
import {updateScore} from "../reducers/scoreboard";
import {Typography} from "@mui/material";

interface Props {
  game: Game,
  onComplete: () => void;
}

export const UpdateScoreModal: React.FC<Props> = ({ game, onComplete }) => {
  const [homeScore, setHomeScore] = useState(game.homeScore);
  const [awayScore, setAwayScore] = useState(game.homeScore);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(updateScore({ gameId: game.id, homeScore, awayScore }));
    onComplete();
  }

  return (
    <Dialog open={true}>
      <Typography variant="h2">Update score</Typography>
      <TextField label={game.homeTeamName} defaultValue={game.homeScore} onChange={(event) => setHomeScore(Number(event.target.value))} />
      <TextField label={game.awayTeamName} defaultValue={game.awayScore} onChange={(event) => setAwayScore(Number(event.target.value))} />
      <Button variant="outlined" onClick={onComplete}>Cancel</Button>
      <Button variant="contained" onClick={onSubmit}>Apply</Button>
    </Dialog>
  )
}
