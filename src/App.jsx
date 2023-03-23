import { NoteAPI } from "api/note-api";
import Header from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteListe } from "store/note/note-slice";

export function App() {

  const dispatch = useDispatch();

  async function fetchAllNotes(){
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteListe(noteList));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App
