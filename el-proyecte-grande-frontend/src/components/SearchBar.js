import { useEffect, useState } from "react";

function SearchBar() {

    const [professions, setProfessions] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        async function fetchArray() {
            const response = await fetch("/profession/all-trial")
            const professions = await response.json()

            console.log(professions)
            setProfessions(professions)
        }
        fetchArray()
        
    }, [])

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