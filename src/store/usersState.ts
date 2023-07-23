import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUsersStatePayload {
  prop: string;
  value: string | boolean;
}

interface IUsersState {
  [k: string]: string | boolean | null;
  usersIsOver: boolean;
}

const initialState: IUsersState = {
  usersIsOver: false,
}

const usersStateSlice = createSlice({
  name: 'usersState',
  initialState,
  reducers: {
    updateUserData: {
      reducer (state, action: PayloadAction<IUsersStatePayload>) {
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

export const { updateUserData } = usersStateSlice.actions;

export default usersStateSlice.reducer;
