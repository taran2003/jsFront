import {useContext} from "react";
import { Route, Navigate} from "react-router-dom";
import {authContext} from "../Providers/AuthProvider";


function PrivateRoute({children}) {
    const {isLoggedIn} = useContext(authContext);

    if (isLoggedIn) {
        return children;
    }
    return <Navigate to='/login'/>
}

export default PrivateRoute;