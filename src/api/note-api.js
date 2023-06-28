import axios from "axios";

// Base de notre URL crée avec json server
const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {
    // Création de d'une note avec la variable "note" (données de la note)
    static async create(note) {
        return (await axios.post(`${BASE_URL}`, note)).data;
    }
    // Récupération de toutes les notes
    static async fetchAll() {
        return (await axios.get(`${BASE_URL}`)).data;
    }
    // Récupération d'une note par son ID
    static async fetchById(noteId) {
        return (await axios.get(`${BASE_URL}/${noteId}`)).data;
    }
    // Suppression d'une note par son ID
    static async deleteById(noteId) {
        return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
    }
    // Mise à jours de la note
    static async Update(note) {
        return (await axios.patch(`${BASE_URL}/${note.id}`, note)).data;
    }
}