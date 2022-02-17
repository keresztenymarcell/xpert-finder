import React from 'react';
import ProfessionTag from './ProfessionTag';

const ProfessionContainer = ({ professions }) => {
    return (
        <div>
            <h1>Professions</h1>
            {professions.map((profession) => (
                <ProfessionTag key={profession.id} profession={profession}/>
            ))}
        </div>
    )
}

export default ProfessionContainer
