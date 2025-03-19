import './Second.css'

export default function SecondPanel({className}) {
    return (
            <div className={(className || "") + " spacer"}>
                <div className="mainTextContainer">
                    <div className="boldText">Cards</div>
                </div>
            </div>
    )
}