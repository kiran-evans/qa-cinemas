import { Link } from "react-router-dom";

const Footer = () => {

    // will need to decise as a team what we want in the header, and what we want in the footer.

    return (
        <div className="footer">
            <div id="plainText">
                <p>Designed and Developed by Team 1</p>
                <p>This is the footer</p>
            </div>
            <div className="nav">
                <div className="navLinks">
                    <Link to='/meetTheTeam'>Meet the Team</Link>
                    <Link to=''><s>PH 2</s></Link>
                    <Link to=''><s>PH 3</s></Link>
                </div>
            </div>
        </div>
    );

};

export default Footer;