import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from './authorization';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    // token: stepOneFormReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
