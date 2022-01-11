import NavBarFunctionalContent from "./NavBarFunctionalContent";
import SearchBar from "./SearchBar";

function NavBar({title}) {
    return (
        <header id='navBar'>
            <img src="smiley.png"></img>
            < NavBarFunctionalContent title={title} />
        </header>
    )
}

export default NavBar;