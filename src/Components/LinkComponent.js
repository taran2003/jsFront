import {Link} from "react-router-dom";


function LinkComponent({to, text}) {
    return (
        <Link className="NavigationText" to={to}>
            {text}
        </Link>
    );
}

export default  LinkComponent