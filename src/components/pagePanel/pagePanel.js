import './panel.css';

export default function PagePanel({children}) {
    return(
        <div class="panel">
            <div class="panelContent">
                {children}
            </div>
        </div>
    )
}