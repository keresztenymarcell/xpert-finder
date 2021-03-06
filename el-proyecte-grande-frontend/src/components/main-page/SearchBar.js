import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationsContext } from "../App";
import { ProfessionsContext } from "../App";

function SearchBar() {

    const navigate = useNavigate();
    const locations = useContext(LocationsContext);
    const professions = useContext(ProfessionsContext);

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
                <h1>Find an Expert!</h1>
                <select name='professions' className="form-select" onChange={(e) => setChoosedProfession(e.target.value)}>
                <option value="" >Choose Profession</option>
                    {professions.map((profession) => (
                        <option key={profession.id} value={profession.id}>{profession.category.name + " - " + profession.name}</option>
                    ))}
                </select>

                <select name='locations' className="form-select" onChange={(e) => setChoosedLocation(e.target.value)}>
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
