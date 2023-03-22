import style from './style.module.scss';

export default function ButtonPrimary({ children, onClick }) {
    return (
        <button onClick={onClick} type='button' className={`btn btn-primary ${style.button}`}>
            {children}
        </button>
    )
}
