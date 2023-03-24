import { NoteAPI } from 'api/note-api';
import NoteForm from 'components/NoteForm/NoteForm';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from 'store/note/note-slice';
import style from './style.module.scss';

export default function NoteCreate() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function createNote(formValues) {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toDateString(),
    })
    dispatch(addNote(createdNote));
    navigate("/")
  }

  return (
    <div>
      <NoteForm title="Créer une note" onSubmit={createNote} />
    </div>
  )
}
