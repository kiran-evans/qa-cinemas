import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div>
            <h1>Team 1's App!</h1>
            <p>This is the Header</p>
            <button type="button" onClick={() => navigator('/')}>Home</button>
            <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
            <button type="button" onClick={() => navigator('/placesToVisit')}>Places To Visit</button>
            <button><s>Discussion Board</s></button>
            <button><s>Contact Us</s></button>
            <button><s>ETC, ETC, ETC</s></button>
            <hr />           
        </div>
    );

};

export default Header;
