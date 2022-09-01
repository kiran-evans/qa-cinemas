import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = (props) => {

    return (
        <div className="header">
            <div className="logo"><h1>Team 1's App!</h1></div>
            <div className="nav">
                <div className="navLinks">
                    <Link to='/'>Home</Link>
                    <Link to='/listings'>Now Showing</Link>
                    <Link to='/newReleases'>New Releases</Link>
                    <Link to='/payForTickets'>Pay For Tickets</Link>
                    <Link to='/classifications'>Movie Classifications</Link>
                    <Link to='/placesToGo'>Places To Go</Link>
                    <Link to=''><s>Discussion Board</s></Link>
                    <Link to='/screens'>Screens</Link>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/openingTimes'>Opening Times</Link>
                </div>
                <SearchBar setSearchResult={props.setSearchResult} />
            </div>
        </div>
    );

};

export default Header;
