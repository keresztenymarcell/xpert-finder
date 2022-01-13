import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const ProfessionTag = ({profession}) => {
    return (
       
        <div className="profession-tag">
            <BusinessCenterIcon className="suitcase-icon"/>
            <div className="profession-name">
                <h4>{profession.name}</h4>
            </div>
        </div>
        
    )
}

export default ProfessionTag
