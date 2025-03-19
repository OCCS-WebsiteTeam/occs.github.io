import './Third.css'

export default function ThirdPanel({className}) {
    return (
        <div className={(className || "") + " spacer"}>
            <div className="mainTextContainer">
                <div className="boldText">Cards</div>
            </div>
        </div>
    )
}