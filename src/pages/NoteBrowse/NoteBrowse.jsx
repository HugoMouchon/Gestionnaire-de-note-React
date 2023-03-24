import NoteList from 'components/containers/NoteList';
import TextCard from 'components/TextCard/TextCard';
import React from 'react'
import style from './style.module.scss';

export default function NoteBrowse() {
  return (
    <div>
      <NoteList/>
    </div>
  )
}

{/* <TextCard
title="blbla"
subtitle="coucou c'est moi"
content="zdakkzaoidjoaijdoiajfoiajefizeifizuehfzefzfzdzdazdazdazdazdazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzazdadazdazdzdzdazdzzdazdazdazdazdezzeedzezefzezezeezdezadezfzefezfzefzefzefezfifz"
onClickDelete={() => alert('supprimé !')}
onClick={() => alert('click note')}
/> */}