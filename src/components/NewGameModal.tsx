import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import {startGame} from "../reducers/scoreboard";
import {useAppDispatch} from "../hooks/redux";

interface Props {
  onComplete: () => void;
}

export const NewGameModal: React.FC<Props> = ({ onComplete }) => {
  const [homeTeamName, setHomeTeamName] = useState('');
  const [awayTeamName, setAwayTeamName] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    dispatch(startGame({ homeTeamName, awayTeamName }));
    onComplete();
  }

  return (
    <Dialog open={true}>
      <Typography variant="h2">Start game</Typography>
      <TextField label="Home team name" onChange={(event) => setHomeTeamName(event.target.value)} />
      <TextField label="Away team name" onChange={(event) => setAwayTeamName(event.target.value)} />
      <Button variant="outlined" onClick={onComplete}>Cancel</Button>
      <Button variant="contained" onClick={onSubmit}>Apply</Button>
    </Dialog>
  )
}
