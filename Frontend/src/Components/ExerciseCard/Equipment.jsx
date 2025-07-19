import "./Equipment.css";
import PropTypes from "prop-types";

function EquipmentUsed(props) {
    return <p className="EquipmentUsed">{props.Equipment}</p>;
}

export default EquipmentUsed;

EquipmentUsed.propTypes = {
    Equipment: PropTypes.object.isRequired,
}