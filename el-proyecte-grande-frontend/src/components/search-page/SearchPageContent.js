import ExpertCard from './ExpertCard'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'


function SearchPageContent() {

    const [experts, setExperts] = useState(null)
    const search = useLocation().search;
    const profession = new URLSearchParams(search).get('professionId');
    const location = new URLSearchParams(search).get('locationId');

    useEffect(() => {
        async function fetchSearchedExpert(){
        const response = await fetch(`/user/search?location-id=${location}&profession-id=${profession}`);
        const experts = await response.json();
        setExperts(experts);
        }
        fetchSearchedExpert();
    }, [profession, location])


    return (
    
        <div className="content-container search-page-container ">
            {experts !== null ? experts.map((expert) => {
                return <ExpertCard key={expert.id} expert={expert} />
            }) : <></>}
        </div>

    )
}

export default SearchPageContent;
