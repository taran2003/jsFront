import {createContext, useMemo, useState} from "react";

export const appContext = createContext({isLoggedIn: false});

const AppProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = useMemo(() => ({isLoggedIn,setIsLoggedIn}), [isLoggedIn])
    return (<appContext.Provider value={value}>
        {children}
    </appContext.Provider>);
}

export default AppProvider;