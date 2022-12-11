import { createContext, useState } from "react";
import { getSessionFromStorage } from '../Helper/ServerRequest'

export const authContext = createContext({ isLoggedIn: false });
//todo посты открытие конкретного поста лайки коменты

const AuthProvider = ({ children }) => {
    let state = false;
    const { accessToken } = getSessionFromStorage();
    if (accessToken) { state = true; }
    const [isLoggedIn, setIsLoggedIn] = useState(state);
    const value = { isLoggedIn, setIsLoggedIn}
    return (<authContext.Provider value={value}>
        {children}
    </authContext.Provider>);
}

export default AuthProvider;