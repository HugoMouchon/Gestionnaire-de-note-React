import { Logo } from 'components/Logo/Logo';
import style from './style.module.scss';
import logo from 'assets/images/logo.png';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return (
        <div className={`row ${style.container}`}>
            <div className='col-xs-12 col-sm-4'>
                <Logo onClick={() => navigate("/")} title="Notomatic" subtitle="Gestionnaire de notes" image={logo}/>
            </div>
            <div className='col-xs-12 col-sm-8 text-end'>
                <ButtonPrimary onClick={()=> navigate("/note/new")}>
                    Ajouter une note
                </ButtonPrimary>
            </div>
        </div>
    )
}
