import { useEffect, useState } from "react";

function SearchBar() {

    const [professions, setProfessions] = useState([])
    const [locations, setLocations] = useState([])
    const [choosedProfession, setChoosedProfession] = useState(null)

    useEffect(() => {
        async function loadProfessions() {
            const response = await fetch("/profession/all-trial")
            const professions = await response.json()
            setProfessions(professions)

        }
        loadProfessions()
        
    }, [])

    return (
        <div className="searchBar">
            <form>
                <p>Find a Professional!</p>
                <select name='professions' onChange={(e) => setChoosedProfession(e.target.value)}>
                <option value={choosedProfession} >Choose a Profession</option>
                    {professions.map((profession, idx) => (
                        <option key={profession + idx} value={profession}>{profession}</option>
                    ))}
                </select>
                <input type='text' placeholder="Choose a Profession"></input>
                <input type='text' placeholder="Choose a Location" ></input>      
            </form>
        </div>
    )
}

export default SearchBar;