import Panel from "../../pagePanel/Panel"
import './Second.css'

export default function SecondPanel({className}) {
    return (
        <Panel>
            <div className={(className || "") + " spacer"}>
                <div className="mainTextContainer">
                    <div className="boldText">Cards</div>
                </div>
            </div>
        </Panel>
    )
}