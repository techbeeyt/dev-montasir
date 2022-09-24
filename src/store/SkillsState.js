import { createSlice } from '@reduxjs/toolkit';

const initialState ={
  index : '0'
}

const SkillState = createSlice({
  name: 'skillstate',
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload;
    }
  }
});

export const { changeIndex } = SkillState.actions;

export default SkillState.reducer;