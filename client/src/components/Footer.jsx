import { useNavigate } from "react-router-dom";

const Footer = () => {

    // will need to decise as a team what we want in the header, and what we want in the footer.

    const navigator = useNavigate();

    return (
        <div>
            <div id="plainText">
                <hr />
                <p>Designed and Developed by Team 1</p>
                <p>This is the footer</p>
            </div>
            <div id="footerButtons">
                <button onClick={() => navigator('/meetTheTeam')}>Meet the Team</button>
                <button><s>PH 2</s></button>
                <button><s>PH 3</s></button>
            </div>
        </div>
    );

};

export default Footer;