import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className="header">
            <div className="logo"><h1>Team 1's App!</h1></div>
            <div className="nav">
                <button>Home</button>
                <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
                <button>Discussion Board</button>
                <button>Contact Us</button>
                <button>ETC, ETC, ETC</button>
            </div>
        </div>
    );

};

export default Header;
