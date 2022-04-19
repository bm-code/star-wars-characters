import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {


    return (
        <header>
            <div className="header-main">
                <div className="logo">
                    <img src={logo} alt="Start Wars logo" />
                </div>
            </div>
        </header>
    )
}
