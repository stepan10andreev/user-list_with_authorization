import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthorizationPayload {
  prop: string;
  value: string | boolean;
}

interface IAuthorization {
  [k: string]: string | boolean | null;
  isAuth: boolean;
  token: string | null;
}

const initialState: IAuthorization = {
  isAuth: false,
  token: null,
}

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    updateAuthorization: {
      reducer (state, action: PayloadAction<IAuthorizationPayload>) {
        state[action.payload.prop] = action.payload.value;
      },
      prepare (prop: string, value: string | boolean) {
        return {
          payload:{
            prop,
            value,
          }
        }
      },
    },
  }
})

export const { updateAuthorization } = authorizationSlice.actions;

export default authorizationSlice.reducer;
