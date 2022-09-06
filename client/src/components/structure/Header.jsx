import { Link } from 'react-router-dom';
import SearchBar from './Searchbar';

const Header = (props) => {

    return (
        <div className="header">
            <div className="logo"><Link to='/'><img alt="Logo" src="/logos/logo.png" /></Link></div>
            <div className="nav">
                <div className="navLinks">
                    <div className="subMenu">
                        <div className="subMenuHeader">Movies</div>
                        <div className="subMenuContent">
                            <Link to='/listings'>Now Showing</Link>
                            <Link to='/newReleases'>New Releases</Link>
                        </div>
                    </div>
                    <div className="subMenu">
                        <div className="subMenuHeader">Booking</div>
                        <div className="subMenuContent">
                            <Link to='/bookNow'>Book Now</Link>
                            <Link to='/payForTickets'>Pay For Tickets</Link>
                        </div>
                    </div>
                    <div className="subMenu">
                        <div className="subMenuHeader">About</div>
                        <div className="subMenuContent">
                            <Link to='/openingTimes'>Opening Times</Link>
                            <Link to='/travelPage'>Getting Here</Link>
                            <Link to='/screens'>Screens</Link>
                            <Link to='/classifications'>Movie Classifications</Link>
                            <Link to='/placesToGo'>Places To Go</Link>
                            <Link to='/aboutUs'>About the Team</Link>
                        </div>
                    </div>
                    <Link to='/discussionBoard'>Discussion Board</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
                <SearchBar setSearchResult={props.setSearchResult} />
            </div>
        </div>
    );

};

export default Header;
