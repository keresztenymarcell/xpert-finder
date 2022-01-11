import SearchBar from "./SearchBar";

function NavBarFunctionalContent({title}) {
    return (
        <div className="navBarFunctionalContent">
                <h1>{title}</h1>
                <SearchBar />
            </div>
    )
}

export default NavBarFunctionalContent;