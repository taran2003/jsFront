import {appContext} from "./Providers/AppProvider";
import {useContext} from "react";

function useAppContext() {
    return  useContext(appContext);
}

export default useAppContext;