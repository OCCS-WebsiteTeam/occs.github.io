import "./LandingSection.css"
import Panel from "../../pagePanel/Panel.js"
import { useEffect, useRef } from "react"

export default function LandingSection({className}) {
    const panelRef = useRef(null)

    useEffect(() => {
        if (!panelRef.current) return;
    
        const elements = panelRef.current.querySelectorAll(".glitchText");
        const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman", "Arial"];
    
        fonts.forEach((font, i) => {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    elements.forEach(el => {
                        el.style.fontFamily = font;
                    });
                });
            }, i * 400);
        });
    }, []);
    

    return (
        <Panel>
            <div className={(className || "") + " spacer"}>
                <div className="mainTextContainer" ref={panelRef}>
                    <div>THIS WEBSITE</div>
                    <div className="boldText">SUCKS.</div>
                    <div className="glitchText">LETS FIX IT.</div>
                </div>
            </div>
        </Panel>
    )
}