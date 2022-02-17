function SelectProfession({firstValue, index, professions, updateProfession, hasChooseHeader}) {

    return(
        <label>
        {index ? <p>Profession {index + 1}</p> : <p>Profession</p>}
        
        <select className={"form-select"} defaultValue={firstValue} data-index={index} onChange={(e)=> {updateProfession(e.target)}}>
            {hasChooseHeader && <option value="">Choose a Profession:</option>}
            {professions && 
                professions.map(profession => {return <option key={profession.id} value={profession.id}>{profession.name}</option>})
            }
        </select>
    </label>
    )
}

export default SelectProfession;