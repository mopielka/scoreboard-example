import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from './reducers/scoreboard';

export const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
