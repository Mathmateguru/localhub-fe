import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const UserContext = createContext({
    isAuthenticated: false,
    updateAuthentication: (status: boolean,  newToken?: string) => {}
});


interface UserContextProps {
    children: React.ReactNode;
}
type DecodedToken = {
    exp: number;
    iat: number;
    sub: string;
};
// producer
const UserProvider = ({ children }: UserContextProps) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("localhubToken"));
    const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

    useEffect(() => {
        if (token) {
            const decodedToken: DecodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken?.exp < currentTime) {
                setIsAuthenticated(false);
                localStorage.removeItem("localhubToken");
                setToken(null);
            } else {
                setIsAuthenticated(true);
            }
        }
    }, [token]);

    const updateAuthentication = (status: boolean, newToken?: string) => {
        setIsAuthenticated(status);
        if (newToken) {
            localStorage.setItem("localhubToken", newToken);
            setToken(newToken);
        }
    };

    return (
        <UserContext.Provider value={{ isAuthenticated, updateAuthentication }}>
            {children}
        </UserContext.Provider>
    );
}

// consumer
export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export default UserProvider
