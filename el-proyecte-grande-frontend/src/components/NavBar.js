import NavBarFunctionalContent from "./NavBarFunctionalContent";

function NavBar({title}) {
    return (
        <header id='navBar'>
            <img src="smiley.png" alt="logo"></img>
            < NavBarFunctionalContent title={title} />
        </header>
    )
}

export default NavBar;