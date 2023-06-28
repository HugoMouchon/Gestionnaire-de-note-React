import { NoteAPI } from "api/note-api";
import Header from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteListe } from "store/note/note-slice";
import style from 'style.module.scss';

export function App() {

  // useDispatch (hooks) qui permet d'acceder à la fonction dispatch qui lui même est utilisé pour envoyer des actions à Redux
  const dispatch = useDispatch();

  // fonction qui récupère toutes les notes et les stocks dans la variable noteList et qui utilise la fonction "setNoteListe" présente dans le store pour mettre à jour le tableau noteList (du store)
  async function fetchAllNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteListe(noteList));
  }

  // Appel de la fonction une seul fois
  useEffect(() => {
    fetchAllNotes();
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <div className={style.outlet_container}>
        <Outlet />
      </div>
    </div>
  );
}

export default App
