import axios from "axios";
import { createContext, useState, useEffect } from "react";


export const UserContext = createContext({});

export function UserContextProvider({ children }) {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (token !== null) {
            axios.get('/user/session').then(({ data }) => {
                setUser(data);
                setReady(true);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, ready, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}