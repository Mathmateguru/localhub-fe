import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
    isAuthenticated: false,
    updateAuthentication: (status: boolean) => { }
});


interface UserContextProps {
    children: React.ReactNode;
}
// producer
const UserProvider = ({ children }: UserContextProps) => {
    const token = localStorage.getItem("localhubToken");

    const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token))

    const updateAuthentication = (status: boolean) => {
        setIsAuthenticated(status);
    }

    return (
        <UserContext.Provider value={{ isAuthenticated, updateAuthentication }}>
            {children}
        </UserContext.Provider>
    )

}

// consumer
export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

export default UserProvider
