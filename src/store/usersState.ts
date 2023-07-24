import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUsersStatePayload {
  prop: string;
  value: string | boolean;
}

interface IUsersState {
  [k: string]: string | boolean | null | any[];
  usersIsOver: boolean;
  isLoadingData: boolean;
  isLikedUsers: any[];
}

const initialState: IUsersState = {
  usersIsOver: false,
  isLoadingData: true,
  isLikedUsers: []
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
