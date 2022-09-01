import { useNavigate } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className="header">
            <div className="logo"><h1>Team 1's App!</h1></div>
            <div className="nav">
                <div className="navButtons">
                    <button type="button" onClick={() => navigator('/')}>Home</button>
                    <button type="button" onClick={() => navigator('/listings')}>Now Showing</button>
                    <button type="button" onClick={() => navigator('/payForTickets')}>Pay For Tickets</button>
                    <button type="button" onClick={() => navigator('/classifications')}>Movie Classifications</button>
                    <button type="button" onClick={() => navigator('/placesToGo')}>Places To Go</button>
                    <button><s>Discussion Board</s></button>
                    <button type="button" onClick={() => navigator('/screens')}>Screens</button>
                    <button type="button" onClick={() => navigator('/contact')}>Contact Us</button>
                    <button type="button" onClick={() => navigator('/openingTimes')}>Opening Times</button>
                </div>
                <SearchBar />
            </div>
        </div>
    );

};

export default Header;
