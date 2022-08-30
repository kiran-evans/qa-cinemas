import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigator = useNavigate();

    return (
        <>
            <h1>Team 1's App!</h1>
            <p>This is the Header</p>
            <button>Home</button>
            <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
            <button>Discussion Board</button>
            <button>Contact Us</button>
            <button>ETC, ETC, ETC</button>
            <hr />
            
        </>
    );

};

export default Header;
