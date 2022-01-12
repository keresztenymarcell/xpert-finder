import { useParams } from "react-router-dom";

function ProfilePageContent() {

    const params = useParams()

    return (
        <>
            <h1>I'M the profile Page</h1>
            <p>{params.id}</p>
        </>
    )
}

export default ProfilePageContent;