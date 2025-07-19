import "./MusclesWorked.css";
import PropTypes from "prop-types";

function MuscleWorked(props) {
    return <p className="MuscleWorked">{props.Muscle}</p>;
}

export default MuscleWorked;

MuscleWorked.propTypes = {
    Muscle: PropTypes.string,
}