import {createContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
const API_URL = import.meta.env.VITE_API_URL;

export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch(`${API_URL}/api/users/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => {
                    if (!res.ok) throw new Error("Unauthorized");
                    return res.json();
                })
                .then((data) => {
                    setUser(data);
                })
                .catch((error) => {
                    console.error("failed to fetch user", error);
                    localStorage.removeItem("token");
                    setUser(null);
                });
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}