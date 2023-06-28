import { createSlice } from "@reduxjs/toolkit";

// createSlice est une fonction qui permet de créer à la fois une tranche (slice) et un réducteur (reducer)
export const noteSlice = createSlice({
    // Nom du reducer
    name: "noteSlice",
    // Etat inital de la tranche ici, un tableau vide nommé noteList
    initialState: {
        noteList: []
    },
    reducers: {
        // fonction qui met à jour noteList avec les données présente dans l'action
        setNoteListe: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        },
        // fonction qui ajoute une note (avec ses données "action") dans le tableau noteList
        addNote: (currentSlice, action) => {
            currentSlice.noteList.push(action.payload);
        },
    }
})

export const noteReducer = noteSlice.reducer;

export const { setNoteListe, addNote } = noteSlice.actions;  