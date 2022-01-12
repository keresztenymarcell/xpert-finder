import ExpertCard from './ExpertCard'


function SearchPageContent({professionId, locationId}) {

    const [experts, setExperts] = useState([])

    useEffect(() => {
        async function fetchSearchedExpert(){
        const response = await fetch(`/api/user/search?location-id=${locationId}&profession-id=${professionId}`);
        const experts = await response.json();
        setExperts(experts);
        }
        fetchSearchedExpert();
    }, [])




    return (
        <div className="search-page-container">
            {/* {experts.map(expert =>{
                //Add a card for each expert
            })} */}
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
            <ExpertCard/>
        </div>
    )
}

export default SearchPageContent;
