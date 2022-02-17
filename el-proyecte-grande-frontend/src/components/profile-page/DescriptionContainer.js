import React from 'react'

const DescriptionContainer = ({description}) => {
    return (
        <>
        <h1>About me</h1>
        <div className="description">
            <h3>{description}</h3>
        </div> 
        </>
    )
}

export default DescriptionContainer
