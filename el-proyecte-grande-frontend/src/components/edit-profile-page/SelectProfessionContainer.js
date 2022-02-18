import SelectProfession from "./SelectProfession";
import AddNewProfession from "./AddNewProfession";
import { ProfessionsContext } from "../App";
import { useContext } from "react";

function SelectProfessionContainer({updatedUserData, setUpdatedUserData, updateProfession}) {

    const professions = useContext(ProfessionsContext);
    const expertInfoProfessions = updatedUserData.expertInfo.professions;

    function removeProfession() {
        const newProfessions = updatedUserData.expertInfo.professions;
        newProfessions.pop()
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, locations:newProfessions}})
    }

    function getRemainingProfessions() {
        const alreadySelectedProfessions = updatedUserData.expertInfo.professions;
        const alreadySelectedProfessionsIndeces = alreadySelectedProfessions.map(profession => profession.id);
        const remainingProfessions = professions.filter(profession => !alreadySelectedProfessionsIndeces.includes(profession.id))
        return remainingProfessions;
    }

    return(
        <>
        <h2>Professions</h2>
        {expertInfoProfessions.map((profession,idx) =>
        <SelectProfession key={profession.id} index={idx} firstValue={updatedUserData.expertInfo.professions[idx].id} updateProfession={updateProfession} professions={professions}/>)}
        {expertInfoProfessions.length > 1 && <button className={"submit"} type="button" onClick={() => removeProfession()}>Remove</button>}
        <AddNewProfession updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} remainingProfessions={getRemainingProfessions()} />
        </>
    )
    
}
export default SelectProfessionContainer;
