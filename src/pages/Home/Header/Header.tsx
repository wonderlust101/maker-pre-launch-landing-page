import MakerLogo from '/images/logo.svg';
import './Header.scss'

export default function Header() {

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={MakerLogo} alt="Maker Logo"/>
            </div>
        </header>
    )
}