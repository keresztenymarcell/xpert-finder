function SearchBar({}) {
    return (
        <div className="searchBar">
            <form>
                <p>Find a Professional!</p>
                <input type='text' placeholder="Choose a Profession"></input>
                <input type='text' placeholder="Choose a Location" ></input>      
            </form>
        </div>
    )
}

export default SearchBar;