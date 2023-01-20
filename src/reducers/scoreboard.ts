import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit'
import * as Scoreboard from "@mopielka/sportradar-scoreboard";
import {FinishGameActionPayload, StartGameActionPayload, UpdateScoreActionPayload} from "./types";

export const scoreboardSlice: Slice = createSlice({
  name: 'scoreboard',
  initialState: {
    scoreboard: Scoreboard.createScoreboard(),
  },
  reducers: {
    updateScore: (state, { payload: { gameId, homeScore, awayScore } }: PayloadAction<UpdateScoreActionPayload>) => ({
      ...state,
      scoreboard: Scoreboard.updateScore(state.scoreboard, gameId, homeScore, awayScore),
    }),
    startGame: (state, { payload: { homeTeamName, awayTeamName } }: PayloadAction<StartGameActionPayload>) => ({
      ...state,
      scoreboard: Scoreboard.startGame(state.scoreboard, homeTeamName, awayTeamName).newScoreboard,
    }),
    finishGame: (state, { payload: { gameId } }: PayloadAction<FinishGameActionPayload>) => ({
      ...state,
      scoreboard: Scoreboard.finishGame(state.scoreboard, gameId),
    }),
  },
});

// Action creators are generated for each case reducer function
export const { updateScore, startGame, finishGame } = scoreboardSlice.actions

export default scoreboardSlice.reducer
