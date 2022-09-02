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
                    <Link to='/meetTheTeam'>Meet the Team</Link>
                    <Link to='/scrum'>About Scrum</Link>
                    <a href="https://scrum.org" rel="noreferrer noopener" target="_blank" title="Visit Scrum.org">Scrum.org</a>
                </div>
            </div>
        </div>
    );

};

export default Footer;