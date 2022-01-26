import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({locations, professions}) {

    const navigate = useNavigate()

    const [choosedProfession, setChoosedProfession] = useState("")
    const [choosedLocation, setChoosedLocation] = useState("")


    useEffect(() => {
        async function searchBarListener() {
            if (choosedLocation !== "" && choosedProfession !== "") {
                navigate(`/search-page?locationId=${choosedLocation}&professionId=${choosedProfession}`)
            }
        }
        searchBarListener()
        }
    , [choosedLocation, choosedProfession, navigate])

    

    return (
        
        <div className="searchBar">
            <form>
                <p>Find a Professional!</p>
                <select name='professions' onChange={(e) => setChoosedProfession(e.target.value)}>
                <option value="" >Choose Profession</option>
                    {professions.map((profession) => (
                        <option key={profession.id} value={profession.id}>{profession.category.name + " - " + profession.name}</option>
                    ))}
                </select>

                <select name='locations' onChange={(e) => setChoosedLocation(e.target.value)}>
                <option value="">Choose Location</option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                </select>   
            </form>
        </div>
    )
}

export default SearchBar;
