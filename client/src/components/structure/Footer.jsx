import { Link } from "react-router-dom";

const Footer = () => {

    // will need to decise as a team what we want in the header, and what we want in the footer.

    return (
        <div className="footer">
            <div id="plainText">
                <p>Designed and Developed by Team 1</p>
            </div>
            <div className="nav">
                <div className="navLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutUs'>About Us</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </div>
        </div>
    );

};

export default Footer;