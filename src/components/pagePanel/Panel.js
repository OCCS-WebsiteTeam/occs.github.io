import './panel.css';

export default function Panel({children}) {
    return(
        <div className="panelContent">
            {children}
        </div>
    )
}