const Navbar = () => {
    return ( 
        <div>
        <div className="header">
        <img src="https://ionicframework.com/docs/assets/icons/logo-react-icon.png" alt="React"/>
        <span>Welcome to BSv Non RPA Portal</span>
        </div>

        <div className="toolbar">
            <a className="links" href="/">
            <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap"/>Home
            </a>
            
            <a className="links" href="/">
            <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap"/>
            Tools
            </a>

            <a className="links" href="/">
            <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap"/>Engagements
            </a>

            <a className="links" href="/">
            <img src="https://cdn3.iconfinder.com/data/icons/universal-27/76/icon-29-512.png" alt="cap"/>iPortal
            </a>
        </div>

        <p>Welcome to the BSV Non RPA Tools Portal</p>
        
        </div>
     );
}
 
export default Navbar;