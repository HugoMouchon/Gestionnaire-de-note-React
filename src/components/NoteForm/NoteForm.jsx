import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import style from './style.module.scss';

export default function NoteForm({ title }) {
    const actionIcon = (
        <>
            <div className='col-1'>
                <PencilFill className={style.icon} />
            </div>
            <div className='col-1'>
                <TrashFill className={style.icon} />
            </div>
        </>
    );
    const titleInput = (
        <>
            <label className='form-label'>
                Title
            </label>
            <input type="text" name='title' className='form-control' />
        </>
    );
    const contentinput = (
        <>
            <label className='form-label'>
                Content
            </label>
            <textarea type="text" name='content' className='form-control' rows="5" />
        </>
    );
    const submitButton = (
        <div className={style.submit_button}>
            <ButtonPrimary>
                Envoyer
            </ButtonPrimary>
        </div>
    );

    return (
        <div className={style.container}>
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
            {submitButton}
        </div>
    );
}
