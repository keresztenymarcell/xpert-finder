import { useParams } from "react-router-dom";

function ProfilePageContent() {

    const params = useParams()

    return (
        <div className="content-container">
            <h1>I'M the profile Page</h1>
            <p>{params.id}</p>
        </div>
    )
}

export default ProfilePageContent;