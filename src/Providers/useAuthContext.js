import {authContext} from "./AuthProvider";
import {useContext} from "react";

export function useAuthContext() {
    return  useContext(authContext);
}

export default useAuthContext;