import '../CSS/Form.css';
import LinkComponent from "./LinkComponent";

function NavigationComponent({linkString}) {
    return (
        <div className="Navigation">
            <LinkComponent
                to={'/'+linkString}
                text={linkString}
            />
            <LinkComponent
                to={"/Main"}
                text={"main"}
            />
        </div>
    );
}

export default NavigationComponent
