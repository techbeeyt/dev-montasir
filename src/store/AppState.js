import { createSlice } from '@reduxjs/toolkit';
import scrollDirection from '../utils/ScrollDir';

export const AppState = createSlice({
    name: 'appstate',
    initialState: {
        scrollBreakPoints : {
            intro: 0,
            skills: 10000,
            projects: 10000,
            courses: 10000,
            contact: 10000
        },
        scrollPosition: {
            intro: 0,
            skills: 10000,
            projects: 10000,
            courses: 10000,
            contact: 10000
        },
        insideViewport: 'intro',
        scrollDirection: scrollDirection.SCROLL_DOWN,
    },
    reducers: {
        setScrollBreakPoints: (state, action) => {
            state.scrollBreakPoints = action.payload;
        },
        setScrollPosition : (state, action) => {
            state.scrollPosition = action.payload;
        },
        setInsideViewPort : (state, action) => {
            state.insideViewport = action.payload;
        },
        setScrollDirection : (state, action) => {
            state.scrollDirection = action.payload;
        }
    },
});

export const { setScrollBreakPoints, setScrollPosition, setInsideViewPort, setScrollDirection } = AppState.actions;

export default AppState.reducer;