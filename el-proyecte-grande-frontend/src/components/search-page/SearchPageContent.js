import ExpertCard from './ExpertCard'
import {useState, useEffect} from 'react'


function SearchPageContent({professionId, locationId}) {

    const [experts, setExperts] = useState(null)

    useEffect(() => {
        async function fetchSearchedExpert(){
        
        const response = await fetch(`/user/search-trial`);

        // const response = await fetch(`/api/user/search?location-id=${locationId}&profession-id=${professionId}`);
        const experts = await response.json();
        setExperts(experts);
        console.log(experts)
        }
        fetchSearchedExpert();
    }, [])




    return (
        <div className="content-container search-page-container ">
            {experts !== null ? experts.map((expert) => {
                return <ExpertCard expert={expert} />
            }) : <></>}
        </div>
    )
}

export default SearchPageContent;
