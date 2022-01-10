import SearchBar from "./SearchBar";

function NavBar({title}) {
    return (
        <header id='navBar'>
            <img src="smiley.png"></img>
            <h1>{title}</h1>
            <SearchBar />
        </header>
    )
}

export default NavBar;