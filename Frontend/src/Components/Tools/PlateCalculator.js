import "./Tools.css"
import React, {useState} from "react";

function PlateCalculator() {
    const [totalWeight, setTotalWeight] = useState(0);
    const [equipmentWeight, setEquipmentWeight] = useState(0);
    const [twentyfives, setTwentyFives] = useState(0);
    const [twenties, setTwenties] = useState(0);
    const [fifteens, setFifteens] = useState(0);
    const [tens, setTens] = useState(0);
    const [fives, setFives] = useState(0);
    const [twoPointFives, setTwoPointFives] = useState(0);
    const [onePointTwoFives, setOnePointTwoFives] = useState(0);
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displayTable, setDisplayTable] = useState(false);

    const handleTotalWeightChange = (e) => {
        setTotalWeight(e.target.value);
    }

    const handleEquipmentWeightChange = (e) => {
        setEquipmentWeight(e.target.value);
    }

    const calculatePlates = () => {
        setTwentyFives(0);
        setTwenties(0);
        setFifteens(0);
        setTens(0);
        setFives(0);
        setTwoPointFives(0);
        setOnePointTwoFives(0);


        let weightToCalculate = totalWeight - equipmentWeight;


        if (weightToCalculate % 1.25 !== 0) {
            setDisplayWarning(true);
        }

        if (weightToCalculate >= 50) {
            let twentyFivesCount = Math.floor(weightToCalculate / 50);
            weightToCalculate -= (twentyFivesCount * 50);
            setTwentyFives(twentyFivesCount);
        }
        if (weightToCalculate >= 40) {
            let twentiesCount = Math.floor(weightToCalculate / 40);
            weightToCalculate -= (twentiesCount * 40);
            setTwenties(twentiesCount);
        }
        if (weightToCalculate >= 30) {
            let fifteensCount = Math.floor(weightToCalculate / 30);
            weightToCalculate -= (fifteensCount * 30);
            setFifteens(fifteensCount);
        }
        if (weightToCalculate >= 20) {
            let tensCount = Math.floor(weightToCalculate / 20);
            weightToCalculate -= (tensCount * 20);
            setTens(tensCount);
        }
        if (weightToCalculate >= 10) {
            let fivesCount = Math.floor(weightToCalculate / 10);
            weightToCalculate -= (fivesCount * 10);
            setFives(fivesCount);
        }
        if (weightToCalculate >= 5) {
            let twoPointFivesCount = Math.floor(weightToCalculate / 5);
            weightToCalculate -= (twoPointFivesCount * 5);
            setTwoPointFives(twoPointFivesCount);
        }
        if (weightToCalculate >= 2.5) {
            let onePointTwoFivesCount = Math.floor(weightToCalculate / 2.5);
            weightToCalculate -= (onePointTwoFivesCount * 2.5);
            setOnePointTwoFives(onePointTwoFivesCount);
        }
        setDisplayTable(true);
    }

    return (
        <div className="Plate-Calculator">
            <h2>Minimum Plate Calculator</h2>

            <div className="Plate-Calculator-Cont">
                <label>Total Weight</label>
                <input value={totalWeight} onChange={handleTotalWeightChange} type="number"/>

                <label>Equipment Weight</label>
                <input value={equipmentWeight} onChange={handleEquipmentWeightChange} type="number"/>

                <button onClick={calculatePlates}>Calculate</button>
            </div>

            <div className="Plate-Calculator-Table">
                {displayWarning && <p>Weight to be calculated must be divisible by the smallest plate (1.25kg)</p>}

                {displayTable &&


                    <table>
                        <thead>
                        <tr>
                            <td>Plate Weight</td>
                            <td>Quantity (each side)</td>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                            <td style={{color: "red"}}>25</td>
                            <td>{twentyfives}</td>
                        </tr>

                        <tr>
                            <td style={{color: "blue"}}>20</td>
                            <td>{twenties}</td>
                        </tr>

                        <tr>
                            <td style={{color: "yellow"}}>15</td>
                            <td>{fifteens}</td>
                        </tr>

                        <tr>
                            <td style={{color: "green"}}>10</td>
                            <td>{tens}</td>
                        </tr>

                        <tr>
                            <td style={{color: "white"}}>5</td>
                            <td>{fives}</td>
                        </tr>

                        <tr>
                            <td style={{color: "black"}}>2.5</td>
                            <td>{twoPointFives}</td>
                        </tr>

                        <tr>
                            <td style={{color: "silver"}}>1.25</td>
                            <td>{onePointTwoFives}</td>
                        </tr>

                        </tbody>


                    </table>
                }

            </div>
        </div>
    )
}

export default PlateCalculator;