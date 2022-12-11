import {postContext} from "./PostProvider";
import {useContext} from "react";

export function useAuthContext() {
    return  useContext(postContext);
}

export default useAuthContext;