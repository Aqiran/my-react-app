import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="header">
                <img src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png" alt="React" />
                <span>Welcome to BSv Non RPA Portal</span>
            </div>

            <div className="toolbar">
                <Link className="links" to="/home">
                    <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap" />Home
            </Link>

                <Link className="links" to="/">
                    <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap" />
            Tools
            </Link>

                <Link className="links" to="/">
                    <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap" />Engagements
            </Link>

                <Link className="links" to="/">
                    <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap" />iPortal
            </Link>
            </div>

            <p>Welcome to the BSV Non RPA Tools Portal</p>

        </div>
    );
}

export default Navbar;