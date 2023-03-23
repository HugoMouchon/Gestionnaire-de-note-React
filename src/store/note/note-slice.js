import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteListe: []
    },
    reducers: {
        setNoteListe: (currentSlice, action) => {
            currentSlice.noteListe = action.payload;
        }
    }
})

export const noteReducer = noteSlice.reducer;

export const { setNoteListe } = noteSlice.actions;  