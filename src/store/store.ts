import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from './authorization';
import usersStateReducer from './usersState';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    usersState: usersStateReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
