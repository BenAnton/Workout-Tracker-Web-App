import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({children}) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" replace/>;
    }

    return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node.children,
}