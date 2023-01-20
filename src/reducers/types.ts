import type { Scoreboard } from "@mopielka/sportradar-scoreboard/dist/types";
import {Draft, PayloadAction} from "@reduxjs/toolkit";

export interface ScoreboardState {
  scoreboard: Scoreboard;
}

export interface ScoreboardReducers {
  updateScore: (state: Draft<ScoreboardState>, action: PayloadAction<UpdateScoreActionPayload>) => ScoreboardState;
  startGame: (state: Draft<ScoreboardState>, action: PayloadAction<StartGameActionPayload>) => ScoreboardState;
  finishGame: (state: Draft<ScoreboardState>, action: PayloadAction<FinishGameActionPayload>) => ScoreboardState;
}

export interface UpdateScoreActionPayload {
  gameId: string;
  homeScore: number;
  awayScore: number;
}

export interface StartGameActionPayload {
  homeTeamName: string;
  awayTeamName: string;
}

export interface FinishGameActionPayload {
  gameId: string;
}
