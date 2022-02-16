function UpdateService({service, index}) {
    return (
        <label>
        {index ? <p>Service {index + 1}</p> : <p>Service</p>}
        
        <input type="text" defaultValue={service.name}></input>
        <input type="textarea" defaultValue={service.description}></input>
        <input type="text" defaultValue={service.price}></input>

        {/* <select className={"form-select"} defaultValue={firstValue} data-index={index} onChange={(e)=> {updateProfession(e.target)}}>
            {hasChooseHeader && <option value="">Choose a Profession:</option>}
            {professions && 
                professions.map(profession => {return <option key={profession.id} value={profession.id}>{profession.name}</option>})
            }
        </select> */}
    </label>
    )
}

export default UpdateService;