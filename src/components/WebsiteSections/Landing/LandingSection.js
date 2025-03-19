import "./LandingSection.css"
import { useEffect, useRef } from "react"

export default function LandingSection({className}) {
    const panelRef = useRef(null)
    useEffect(() => {
        let delay = 750
        if (!panelRef.current) return;
        const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman"];
        // const colors = ["lightgreen", "lightyellow", "lightblue", "purple", "lighpink"]
        const things = [
            {element: (document.querySelectorAll(".glitchText")[0]), times: 4}, 
            {element: (document.querySelectorAll(".glitchText")[1]), times: 4}, 
            {element: (document.querySelectorAll(".glitchText")[2]), times: 4}, 
            {element: (document.querySelectorAll(".landing")[0]), times: 4}
        ].forEach((el) => {
            for(let i = 0; i < el.times; i++) {
                setTimeout(() => {
                    requestAnimationFrame(() => {
                        el.element.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                        // el.element.style.color = colors[Math.floor(Math.random() * colors.length)];
                        // el.element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    });
                }, i * delay);
            }
            setTimeout(() => {
                // el.element.style.backgroundColor = "black"
                el.element.style.fontFamily = "Arial"
                // el.element.style.color = "white"
            }, el.times * delay)
        });
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