import NoteForm from 'components/NoteForm/NoteForm';
import React from 'react'
import style from './style.module.scss';

export default function NoteCreate() {
  return (
    <div>
      <NoteForm title="Créer une note"/>
    </div>
  )
}
