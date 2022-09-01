import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Searchbar = (props) => {

    const navigator = useNavigate();
    const [query, setQuery] = useState('');

    const search = async (e) => {
        e.preventDefault();
        if (query.length === 0) return;
        
        try {
            const res = await axios.get('http://localhost:5000/api/movies');
            let resultArray = [];
            
            // For each movie in the database, check if the title includes the search query. If it does, add it to the search results array.
            resultArray = res.data.filter(r => (r.title.toLowerCase().includes(query.toLowerCase())));

            props.setSearchResult(resultArray);
        } catch (err) {
            console.log(err);
        }

        navigator('/search');
    };

    return (
        <div className="searchBar">
            <form className="searchForm" onSubmit={(e) => search(e)}>
                <input type="search" placeholder="Search movies..." className="searchInput" onChange={(e) => setQuery(e.target.value)} value={query} />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;