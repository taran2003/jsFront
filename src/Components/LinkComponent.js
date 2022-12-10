import {Link} from "react-router-dom";


function LinkComponent({to, children}) {
    return (
        <Link className="NavigationText" to={to}>
            {children}
        </Link>
    );
}

export default  LinkComponent