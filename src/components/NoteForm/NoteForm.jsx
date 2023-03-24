import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import { useState } from 'react';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import style from './style.module.scss';

export default function NoteForm({ title, onClickEdit, onClickDelete, onSubmit }) {
    const [formValues, setFormValues] = useState({ title: "", content: "" });

    function uptadeFormValues(event) {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })
    }

    const actionIcon = (
        <>
            <div className='col-1'>
                {onClickEdit && <PencilFill onClick={onClickEdit} className={style.icon} />}
            </div>
            <div className='col-1'>
                {onClickDelete && <TrashFill onClick={onClickDelete} className={style.icon} />}
            </div>
        </>
    );
    const titleInput = (
        <>
            <label className='form-label'>
                Title
            </label>
            <input onChange={uptadeFormValues} type="text" name='title' className='form-control' />
        </>
    );
    const contentinput = (
        <>
            <label className='form-label'>
                Content
            </label>
            <textarea onChange={uptadeFormValues} type="text" name='content' className='form-control' rows="5" />
        </>
    );
    const submitButton = (
        <div className={style.submit_button}>
            <ButtonPrimary onClick={() => onSubmit(formValues)}>
                Envoyer
            </ButtonPrimary>
        </div>
    );

    return (
        <form className={style.container}>
            <div className="row justify-content-space-between">
                <div className='col-10'>
                    <h2 className='mb-3'>{title}</h2>
                </div>
                {actionIcon}
            </div>
            <div className={`mb-3 ${style.title_input_container}`}>
                {titleInput}
            </div>
            <div className='mb-3'>
                {contentinput}
            </div>
            {onSubmit && submitButton}
        </form>
    );
}
