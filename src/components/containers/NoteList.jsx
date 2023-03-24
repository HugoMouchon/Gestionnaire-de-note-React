import TextCard from 'components/TextCard/TextCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.scss';

export default function NoteList() {
    const noteList = useSelector((store) => store.NOTE.noteList);
    console.log(noteList);
    const navigate = useNavigate();

    return (
        <div className={`row justify-content-center ${style.cards_container}`}>
            {noteList.map((note) => {
                return (
                    <div className={style.card_container}>
                        <TextCard
                            title={note.title}
                            subtitle={note.subtitle}
                            content={note.content}
                            onClickDelete={() => alert("coucou c'est moiiiiiii")}
                            onClick={() => navigate("/note/" + note.id)}
                        />
                    </div>
                );
            })}
        </div>
    )
}
