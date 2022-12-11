import '../CSS/navigation.css';
import {Link} from "react-router-dom";
import LinkComponent from "./LinkComponent";
import { getUserFromStorage} from "../Helper/ServerRequest";
import useAuthContext from '../Providers/useAuthContext';

function NavigationComponent({ children }) {
    const { firstName,lastName } = getUserFromStorage();
    return (
        <div className="Navigation">
            <LinkComponent to={'/' + children}>
                {children}
            </LinkComponent>
            <LinkComponent to='/addPost'>
                addPost
            </LinkComponent>            
                <Link className='User' to='/user'>
                    {`${firstName} ${lastName}`}
                </Link>            
        </div>
    );
}

export default NavigationComponent
