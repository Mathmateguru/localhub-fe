import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({
    isAuthenticated: false,
    updateAuthentication: (status: boolean) => {}
});


interface UserContextProps {   
    children: React.ReactNode;
}
// producer
const UserProvider = ({ children }: UserContextProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("localhubToken");
        if (token) {
            setIsAuthenticated(!!token);
        }   
    }, [])
const updateAuthentication = (status: boolean) => {
    setIsAuthenticated(status);
}

    return (
        <UserContext.Provider value={{isAuthenticated, updateAuthentication}}>
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
