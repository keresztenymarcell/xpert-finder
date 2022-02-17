import { useState } from "react";
import SelectProfession from "./SelectProfession";

function AddNewProfession({remainingProfessions, updatedUserData, setUpdatedUserData}) {


    const [isOpen, setIsOpen] = useState(false);


    function addNewProfession(target) {
        const newProfessionId = target.value;
        remainingProfessions.filter(profession => profession.id === newProfessionId);
        const newProfession = remainingProfessions[0];
        let chosenProfessions = updatedUserData.expertInfo.professions;
        chosenProfessions.push(newProfession);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, professions:chosenProfessions}});
        setIsOpen(false);
    }

    return(

            (isOpen) ? 
            <SelectProfession updateProfession={addNewProfession} professions={remainingProfessions} hasChooseHeader={true} />
            :
            <button className={"submit"} type="button" onClick={()=> setIsOpen(true)} >Add</button>

    )
    
}

export default AddNewProfession;