import "./Header.css"
import logo from '../../assets/DayaraLogo.svg'

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="grid">
                        <img src={logo} alt="Dayar Logo" />

                        <div className="header-btn">
                            <button className="login">Login</button>
                            <button className="register">Register</button>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}


export default Header;