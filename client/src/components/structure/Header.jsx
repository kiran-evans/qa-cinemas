import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = (props) => {

    return (
        <div className="header">
            <div className="nav">
                <div className="logo"><Link to='/'><img alt="Logo" src="https://cdn.discordapp.com/attachments/768054278933184533/1014837355909226497/qa-cinemas-logo-transp.png" width={70} height={45}/></Link></div>
                <div className="navLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/listings'>Now Showing</Link>
                    <Link to='/newReleases'>New Releases</Link>
                    <Link to='/bookNow'>Book Now</Link>
                    <Link to='/payForTickets'>Pay For Tickets</Link>
                    <Link to='/classifications'>Movie Classifications</Link>
                    <Link to='/placesToGo'>Places To Go</Link>
                    <Link to='/discussionBoard'>Discussion Board</Link>
                    <Link to='/screens'>Screens</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/openingTimes'>Opening Times</Link>
                    <Link to='/travelPage'>Travel Page</Link>
                </div>
                <SearchBar setSearchResult={props.setSearchResult} />
            </div>
        </div>
    );

};

export default Header;
