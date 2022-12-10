import useAuthContext from "../Providers/useAuthContext";
import {Navigate} from "react-router-dom";


function Logout () {
    const {setIsLoggedIn} = useAuthContext();
    setIsLoggedIn(false);
    localStorage.clear();
    return <Navigate to='/login'/>;
}

export default Logout;