import '../CSS/Form.css';
import LinkComponent from "./LinkComponent";

function NavigationComponent({ children }) {
    return (
        <div className="Navigation">
            <LinkComponent to={'/' + children}>
                {children}
            </LinkComponent>
            <LinkComponent to='/addPost'>
                addPost
            </LinkComponent>
        </div>
    );
}

export default NavigationComponent
