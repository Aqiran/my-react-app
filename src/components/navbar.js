import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';



const Navbar = () => {
    return (
        <div>
            <div className="header">
                <img src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png" alt="React" />
                <span>Welcome to BSv Non RPA Portal</span>
            </div>

            <div className="toolbar">
                <Link className="links" to="/home"><SchoolSharpIcon />Home</Link>

                <Link className="links" to="/"><SchoolSharpIcon />Tools</Link>

                <Link className="links" to="/"><CodeSharpIcon />Engagements
                    </Link>

                <Link className="links" to="/"><WhatshotSharpIcon />
                   iPortal

                </Link>
            </div>

            <p>Welcome to the BSV Non RPA Tools Portal</p>

        </div>
    );
}

export default Navbar;