import React, {useState} from 'react';
import {Scoreboard} from "./components/Scoreboard";
import {NewGameModal} from "./components/NewGameModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import {Container, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

const App: React.FC = () => {
  const [newGameModalOpen, setNewGameModalOpen] = useState(false);

  return (
    <>
      <Box>
        <AppBar position="static">
          <Typography variant="h1">Sportradar's scoreboard</Typography>
        </AppBar>
      </Box>
      <Container maxWidth="md" component={Paper}>
        <Scoreboard />
        <Button variant="outlined" onClick={() => setNewGameModalOpen(true)}>New game</Button>
        { newGameModalOpen && <NewGameModal onComplete={() => setNewGameModalOpen(false)} /> }
      </Container>
    </>
  ) }

export default App;
