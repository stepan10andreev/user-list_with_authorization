import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUsersStatePayload {
  prop: string;
  value: string | boolean;
}

interface IUsersState {
  [k: string]: string | boolean | null;
  usersIsOver: boolean;
  isLoadingData: boolean;
}

const initialState: IUsersState = {
  usersIsOver: false,
  isLoadingData: true,
}

const usersStateSlice = createSlice({
  name: 'usersState',
  initialState,
  reducers: {
    updateUsersState: {
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

export const { updateUsersState } = usersStateSlice.actions;

export default usersStateSlice.reducer;
