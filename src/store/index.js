import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./note/note-slice";

// Configuration du store de Redux
export const store = configureStore({
  reducer: {
    // clé-valeur: Note etant le nom de la tranche et noteReducer (qui est notre noteSlice) les données
    NOTE : noteReducer,

  }
});
