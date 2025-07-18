import "./Tools.css"
import React, {useState} from "react";

function OneRMCalculator() {
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const [max, setMax] = useState(0);

    const handleWeightChange = (e) => {
        const weightInput = e.target.value;
        setWeight(weightInput);
        let oneRepMax = ((reps / 30) + 1) * weightInput;
        setMax(oneRepMax.toFixed(2));
    }

    const handleRepsChange = (e) => {
        const repsInput = e.target.value;
        setReps(repsInput);
        let oneRepMax = ((repsInput / 30) + 1) * weight;
        setMax(oneRepMax.toFixed(2));
    }


    return (
        <div className="OneRM-Calculator">
            <h2>One Rep Max Calculator</h2>

            <div className="OneRM-Cont">
                <input id="weight" value={weight} onChange={handleWeightChange}/>
                <label htmlFor="weight">Weight (Kg)</label>

                <input id="reps" value={reps} onChange={handleRepsChange}/>
                <label htmlFor="reps">Reps</label>


            </div>
            <p className="OneRM-P-Element">One rep max: {max} Kg</p>
        </div>
    )
}

export default OneRMCalculator;