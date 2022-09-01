import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Searchbar = () => {

    const navigator = useNavigate();
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const search = async () => {
        try {
            const res = axios.get(`http://localhost:5000/api/movies/search?q=${query}`);
            setResult(res.data);
            navigator('/search');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="searchBar">
            <form className="searchForm" onSubmit={() => search()}>
                <input type="search" placeholder="Search movies..." className="searchInput" onChange={(e) => setQuery(e.target.value)} />
                <button type="button" className="searchButton">Search</button>
            </form>
        </div>
    )
}

export default Searchbar;