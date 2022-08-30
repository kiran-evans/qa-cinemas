import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className="header">
            <div className="logo"><h1>Team 1's App!</h1></div>
            <div className="nav">
              <button type="button" onClick={() => navigator('/')}>Home</button>
              <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
              <button type="button" onClick={() => navigator('/placesToVisit')}>Places To Visit</button>
              <button type="button" onClick={() => navigator('/openingTimes')}>Opening Times</button>
              <button><s>Discussion Board</s></button>
              <button><s>Contact Us</s></button>
              <button><s>ETC, ETC, ETC</s></button>
            </div>
        </div>
    );

};

export default Header;
