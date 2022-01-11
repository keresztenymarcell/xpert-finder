import NavBarFunctionalContent from "./NavBarFunctionalContent";

function NavBar({title}) {
    return (
        <header id='navBar'>
            <img src="smiley.png" alt="logo"></img>
            <div id='navBarFunctionalContentContainer'>
                <h1>{title}</h1>
                <NavBarFunctionalContent />
            </div>
            
        </header>
    )
}

export default NavBar;