import {useContext} from "react";
import { Route, Navigate} from "react-router-dom";
import {appContext} from "./Providers/AppProvider";


function PrivateRoute({children}) {
    const {isLoggedIn} = useContext(appContext);

    if (isLoggedIn) {
        return children;
    }
    return <Navigate to='/login'/>
}

export default PrivateRoute;