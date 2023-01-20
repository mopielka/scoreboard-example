import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {startGame} from "../reducers/scoreboard";
import {useAppDispatch} from "../hooks/redux";
import {FormDialog} from "./FormDialog";

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
    <FormDialog title="Start game">
      <TextField label="Home team name" onChange={(event) => setHomeTeamName(event.target.value)} />
      <TextField label="Away team name" onChange={(event) => setAwayTeamName(event.target.value)} />
      <Button variant="outlined" onClick={onComplete}>Cancel</Button>
      <Button variant="contained" onClick={onSubmit}>Apply</Button>
    </FormDialog>
  )
}
