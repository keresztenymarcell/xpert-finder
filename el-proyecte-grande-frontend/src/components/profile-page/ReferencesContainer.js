import Reference from './Reference';

const ReferencesContainer = ({references}) => {
    return (
        <>
            <h1>References</h1>
            <div className="references-container">
                {references.map((reference) => {
                    return <Reference key={reference.id} reference={reference}/>
                })}
            </div>
        </>
    )
}

export default ReferencesContainer
