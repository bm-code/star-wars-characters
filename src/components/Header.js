import logo from '../assets/logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="header-main">
                <div className="logo">
                    <img src={logo} alt="Start Wars logo" />
                </div>
                <nav className="order">
                    <button className="header-btn name-order">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Order by name
                    </button>
                    <button className="header-btn height-order">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Order by height
                    </button>
                </nav>
            </div>
        </header>
    )
}
