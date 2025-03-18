import "./LandingSection.css"
import Panel from "../pagePanel/pagePanel.js"
import { useEffect, useRef } from "react"

export default function LandingSection() {
    const panelRef = useRef(null)

    useEffect(() => {
        if (!panelRef.current) return;
        panelRef.current.querySelectorAll(".glitchText").forEach(el => {
            const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman", "Arial"];
            let fontIndex = 0;
            el.style.fontFamily = fonts[fontIndex];
        
            const changing = setInterval(() => {
                fontIndex++;
                if (fontIndex >= fonts.length) {
                    clearInterval(changing);
                } else {
                    el.style.fontFamily = fonts[fontIndex];
                }
            }, 400);
        });
    }, []) // Empty dependency array to run once

    return (
        <Panel>
            <div className="mainTextContainer" ref={panelRef}>
                <div>THIS WEBSITE</div>
                <div className="boldText">SUCKS.</div>
                <div className="glitchText">LETS FIX IT.</div>
            </div>
        </Panel>
    )
}