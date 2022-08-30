import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigator = useNavigate();

    return (
        <>
            <h1>Team 1's App!</h1>
            <p>This is the Header</p>
            <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
            <button>PH 1</button>
            <button>PH 2</button>
            <hr />
            
        </>
    );

};

export default Header;
