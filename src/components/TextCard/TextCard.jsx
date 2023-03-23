import { useState } from 'react';
import style from './style.module.scss';
import { Trash as TrashIcon } from 'react-bootstrap-icons';

export default function TextCard({ title, subtitle, content, onClickDelete, onClick }) {
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isDeleteHovered, setIsDeleteHovered] = useState(false);

    function onClickDelete_(event) {
        onClickDelete();
        event.stopPropagation();
    }

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            className={`card ${style.container}`}
            style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
        >
            <div className="card-body">
                <div className={style.title_row}>
                    <h5 className="card-title">{title}</h5>
                    <TrashIcon
                        size={20}
                        onClick={onClickDelete_}
                        onMouseEnter={() => setIsDeleteHovered(true)}
                        onMouseLeave={() => setIsDeleteHovered(false)}
                        style={{ color: isDeleteHovered ? "#FF7373" : "#b8b8b8" }}
                    />
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <p className={`card-text ${style.text_content}`}>
                    {content}
                </p>
            </div>
        </div>
    )
}
