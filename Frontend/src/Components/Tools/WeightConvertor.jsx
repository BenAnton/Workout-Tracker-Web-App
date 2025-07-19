import "./Tools.css"
import React, {useState} from "react";

function WeightConvertor() {
    const [kg, setKg] = useState(0);
    const [lbs, setLbs] = useState(0);


    const handleKgChange = (e) => {
        const value = e.target.value;
        setKg(value);
        setLbs((value * 2.205).toFixed(2));
    }

    const handleLbsChange = (e) => {
        const value = e.target.value;
        setLbs(value);
        setKg((value / 2.205).toFixed(2));
    }

    return (
        <div className="Weight-Convertor-Cont">
            <h2>Weight Convertor </h2>

            <div className="Weight-Input-Cont">
                <label htmlFor="Kg">Kg</label>
                <input placeholder="kg" type="number" value={kg} onChange={handleKgChange}/>


                <p>=</p>
                <label htmlFor="lbs">Lbs</label>
                <input id="lbs" type="number" value={lbs} onChange={handleLbsChange}/>

            </div>
        </div>
    )
}

export default WeightConvertor;