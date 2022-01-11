import NavBarFunctionalContent from "./NavBarFunctionalContent";

function NavBar({title, user, setUser}) {
    return (
        <header id='navBar'>
            <img src="smiley.png" alt="logo"></img>
            <div id='navBarFunctionalContentContainer'>
                <h1>{title}</h1>
                <NavBarFunctionalContent user={user} setUser={setUser} />
            </div>
            
        </header>
    )
}

export default NavBar;