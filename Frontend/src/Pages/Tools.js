import WeightConvertor from "../Components/Tools/WeightConvertor";
import OneRMCalculator from "../Components/Tools/1RMCalculator";
import PlateCalculator from "../Components/Tools/PlateCalculator";
import "../Components/Tools/Tools.css"

function Tools() {
    return (
        <div className="Tools-Flex">
            <WeightConvertor/>
            <OneRMCalculator/>
            <PlateCalculator/>

        </div>
    )
}

export default Tools;