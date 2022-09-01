import { useNavigate } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = () => {

    const navigator = useNavigate();

    return (
        <div className="header">
            <div className="nav">
                <div className="logo"><button type="button" onClick={() => navigator('/')}><img alt="Logo" src="https://cdn.discordapp.com/attachments/768054278933184533/1014837355909226497/qa-cinemas-logo-transp.png" width={70} height={45}/></button>
                </div>
                <div className="navButtons">
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
