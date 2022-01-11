import ButtonPanel from "./ButtonPanel";
import SearchBar from "./SearchBar";

function NavBarFunctionalContent({user, setUser}) {
    return (
        <div id="navBarFunctionalContent">
            <SearchBar />
            <ButtonPanel user={user} setUser={setUser} />
        </div>
    )
}

export default NavBarFunctionalContent;