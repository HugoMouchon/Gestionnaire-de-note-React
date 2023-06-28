import { useState } from 'react';
import style from './style.module.scss';
import { Trash as TrashIcon } from 'react-bootstrap-icons';

// Composant de Card qui contient un titre, un sous-titre, un texte de contenu et un bouton supprimer 
export default function TextCard({ title, subtitle, content, onClickDelete, onClick }) {

    // Etat qui permetra de savoir si l'utilisateur passe la souris sur la card (initialisé à NON par defaut)
    const [isCardHovered, setIsCardHovered] = useState(false);
    // Etat qui permetra de savoir si l'utilisateur passe la souris sur l'icon poubelle (initialisé à NON par defaut)
    const [isDeleteHovered, setIsDeleteHovered] = useState(false);

    // Fonction qui permet de supprimer la card
    function onClickDelete_(event) {
        onClickDelete();
        event.stopPropagation();
    }

    // Utilisation d'une card créée avec Bootstrap 
    return (
        <div
            onClick={onClick}  // Card cliquable
            onMouseEnter={() => setIsCardHovered(true)} // Si la souris est sur la card alors l'état passe à vrai
            onMouseLeave={() => setIsCardHovered(false)} // Si la souris quitte la card alors l'état repasse à faux
            className={`card ${style.container}`}
            style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }} // Ternaire qui change la couleur de la bordure en fonction de l'état du hover de la card, elle devient bleu si "vrai" sinon transparent.
        >
            <div className="card-body"> 
                <div className={style.title_row}> 
                    <h5 className="card-title">{title}</h5>
                    <TrashIcon
                        size={20} // Taille de l'icone
                        onClick={onClickDelete_} // Appel de la fonction suppression lors du click
                        onMouseEnter={() => setIsDeleteHovered(true)} // Si la souris est sur l'icone alors l'état passe à vrai
                        onMouseLeave={() => setIsDeleteHovered(false)} // Si la souris quitte l'icone alors l'état passe à faux
                        style={{ color: isDeleteHovered ? "#FF7373" : "#b8b8b8" }}// Ternaire qui change la couleur de l'icone en fonction de son état,elle changera en rouge si "vrai" sinon en gris.
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
