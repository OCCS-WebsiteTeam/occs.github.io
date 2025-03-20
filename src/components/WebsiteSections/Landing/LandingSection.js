import "./LandingSection.css"
import { useEffect } from "react"

export default function LandingSection({className}) {

    useEffect(() => {
        let delay = 750;

        const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman"];
        const colors = ["lightgreen", "lightyellow", "lightblue", "purple", "lightpink"];
        
        const things = [
            { element: document.querySelectorAll(".glitchText")[0], times: 4 },
            { element: document.querySelectorAll(".glitchText")[1], times: 4 },
            { element: document.querySelectorAll(".glitchText")[2], times: 4 },
            { element: document.querySelectorAll(".landing")[0], times: 4 }
        ];

        things.forEach((el) => {
            for (let i = 0; i < el.times; i++) {
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        el.element.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
                        // el.element.style.color = colors[Math.floor(Math.random() * colors.length)];
                        // el.element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    }, i * delay);
                });
            }

            setTimeout(() => {
                // el.element.style.backgroundColor = "black";
                el.element.style.fontFamily = "Arial";
                // el.element.style.color = "white";
            }, el.times * delay);
        });
        // return () => document.head.removeChild(link);
    }, []);
    return (
        <div className={(className || "") + " landing"}>
            <div className="mainTextContainer">
                <div className="glitchText">THIS WEBSITE</div>
                <div className="boldText glitchText">SUCKS.</div>
                <div className="glitchText">LETS FIX IT.</div>
            </div>
        </div>
    );
}
