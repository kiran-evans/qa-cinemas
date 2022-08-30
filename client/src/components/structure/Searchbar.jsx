const Searchbar = () => {
    return (
        <div className="searchBar">
            <input type="search" placeholder="Search movies..." className="searchInput" />
            <button type="button" className="searchButton">Search</button>
        </div>
    )
}

export default Searchbar;