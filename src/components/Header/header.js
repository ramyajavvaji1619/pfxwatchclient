import { Link ,useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import './header.css';
import logo from '../Home/PFX Watch Black.png';

const Header= () =>{
    let navigate=useNavigate();

    const onClickLogout =()=>{
        
        Cookies.remove('jwt-token')
        navigate('/')
    }


    return(
        <nav className="navbar-container">
            <div>
                <Link to="/">
                <img src={logo}  
                className="website-logo" />
                </Link>
            </div>
            <ul className="header-list-items">
                <Link className="link-item" to="/">
                    <li className="home-heading home">Home</li>
                </Link>
               
            </ul>
            <div>
                <button className="logout-button" type="button" onClick={onClickLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Header;
