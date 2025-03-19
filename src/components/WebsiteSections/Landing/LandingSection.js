import "./LandingSection.css"
import { useEffect, useRef } from "react"

export default function LandingSection({className}) {
    const panelRef = useRef(null)

    useEffect(() => {
        let delay = 750
        if (!panelRef.current) return;
    
        const elements = panelRef.current.querySelectorAll(".glitchText");
        const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman"];
        const colors = ["red", "pink", "green", "yellow", "blue"]
    
        fonts.forEach((font, i) => {
            setTimeout(() => {
                requestAnimationFrame(() => {
                    elements.forEach(el => {
                        el.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                        el.style.color = colors[Math.floor(Math.random() * colors.length)];
                    });
                    document.querySelector(".landing").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                });
            }, i * delay);
        });
        setTimeout(() => {
            elements.forEach(el => {
                el.style.fontFamily = "Arial";
                el.style.color = "white"
            });
            document.querySelector(".landing").style.backgroundColor = "black"
        }, 6 * delay);
    }, []);

    return (
        <div className={(className || "") + " landing"}>
            <div className="mainTextContainer" ref={panelRef}>
                <div className="glitchText">THIS WEBSITE</div>
                <div className="boldText glitchText">SUCKS.</div>
                <div className="glitchText">LETS FIX IT.</div>
            </div>
        </div>
    )
}