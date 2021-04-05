import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const Navbar = () => {
    return (
        <div>
            <div className="header">
                <img src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png" alt="React" />
                <span>Welcome to BSv Non RPA Portal</span>
            </div>

            <div className="toolbar">
                <Link className="links" to="/home">
                    <Icon><span class="material-icons">school</span></Icon>Home
                    <Icon><span class="material-icons">arrow_forward_ios</span></Icon>
                </Link>

                <Link className="links" to="/">
                    <Icon><span class="material-icons">school</span></Icon>Tools
                    <Icon><span class="material-icons">arrow_forward_ios</span></Icon>
                </Link>

                <Link className="links" to="/">
                    <Icon><span class="material-icons-sharp">code</span></Icon>Engagements
                    <Icon><span class="material-icons">arrow_forward_ios</span></Icon>
                </Link>

                <Link className="links" to="/">
                    <Icon><span class="material-icons-sharp">whatshot</span></Icon>iPortal
                    <Icon><span class="material-icons">arrow_forward_ios</span></Icon>
                </Link>
            </div>

            <p>Welcome to the BSV Non RPA Tools Portal</p>

        </div>
    );
}

export default Navbar;