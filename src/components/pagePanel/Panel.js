import './panel.css';

export default function Panel({children, className}) {
    return(
        <div className={(className || "") + "panelContent"}>
            {children}
        </div>
    )
}