

const Reference = ({reference}) => {
    return (
        <div className="reference">
            <div className="reference-picture-container">
                <img className="reference-picture" src={reference.imagePath} alt="reference work"></img>
            </div>
            <p>{reference.description}</p>
        </div>
    )
}

export default Reference
