import Panel from "../../pagePanel/Panel"
import './Third.css'

export default function ThirdPanel({className}) {
    return (
        <Panel>
            <div className={className + " spacer"}>
                <div className="mainTextContainer">
                    <div className="boldText">Cards</div>
                </div>
            </div>
        </Panel>
    )
}