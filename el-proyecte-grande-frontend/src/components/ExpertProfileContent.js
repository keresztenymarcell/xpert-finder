import { useParams } from "react-router-dom";

function ExpertProfileContent() {
    const params = useParams()

    return (
        <div>
            <h1>I'm the Expert Profile</h1>
            <p>{params.id}</p>
        </div>
    )
}

export default ExpertProfileContent;