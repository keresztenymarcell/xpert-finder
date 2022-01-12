import { useEffect, useState } from "react";

function SearchBar() {

    const [professions, setProfessions] = useState([])
    const [locations, setLocations] = useState([])
    const [choosedProfession, setChoosedProfession] = useState(null)
    const [choosedLocation, setChoosedLocation] = useState(null)

    useEffect(() => {
        async function loadProfessions() {
            const response = await fetch("/profession/all-trial")
            const professions = await response.json()
            setProfessions(professions)

        }
        loadProfessions()
        
    }, [])

    useEffect(() => {
        async function loadLocations() {
            const response = await fetch("/location/all-trial")
            const locations = await response.json()
            setLocations(locations)
        }
        loadLocations()
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

                <select name='locations' onChange={(e) => setChoosedLocation(e.target.value)}>
                <option value={choosedLocation} >Choose a Location</option>
                    {locations.map((location, idx) => (
                        <option key={location + idx} value={location}>{location}</option>
                    ))}
                </select>   
            </form>
        </div>
    )
}

export default SearchBar;