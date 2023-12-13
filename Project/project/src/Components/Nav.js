import { Link } from "react-router-dom";
import '../Assets/Css/Footer.css'
import logo from '../Assets/Img/LOGO.png' 

function Nav() {
    return (
        <>
            <div className="navbar">
                <div className="navtitle">
                    <h2 className="te">D&F'S</h2>
                </div>
                <ul className="navlinks">
                    <img src={logo} alt="myimg" className="logo" />
                    <li className="nav-link"><b>Home</b></li>
                    <li className="nav-link"><b>About</b></li>
                    <li className="nav-link"><b>Contact</b></li>
                    <li className="nav-link">
                        <Link to="/">
                            <b>Login</b>
                        </Link>
                    </li>
                </ul>
               
                     

            

            </div>
        </>
    );
}

export default Nav;
