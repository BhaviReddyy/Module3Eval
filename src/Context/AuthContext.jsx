import { createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [role, setRole] = useState("");
    const login = (userRole) => {
        setIsAuth(true);
        setRole(userRole);
        const login = (userRole) => {
        setIsAuth(true);
        setRole(userRole);
    };
    const logout = () => {
        setIsAuth(false);
        setRole("");
    };
    return (
        <AuthContext.Provider value={{ isAuth, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}