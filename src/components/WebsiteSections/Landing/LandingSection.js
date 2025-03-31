import { useEffect, useRef } from "react";
import "./LandingSection.css";

export default function LandingSection({ className }) {
    // GlitchTextRefs contains a list of references to the divs that the effect will be applied to
    const glitchTextRefs = useRef([]);

    useEffect(() => {
        let delay = 750;
        let times = 4;

        const fonts = ["Brush Script MT", "Papyrus", "Comic Sans MS", "Lucida Handwriting", "Jokerman"];
        // Method to apply random fonts to all elements in the reference list
        const applyRandomFont = () => {
            glitchTextRefs.current.forEach((el) => {
                const Random = Math.floor(Math.random() * fonts.length)
                el.style.fontFamily = fonts[Random];
            });
        };

        // Initial randomization
        applyRandomFont();

        // Interval for glitch effect
        const interval = setInterval(applyRandomFont, delay);

        // Clearing interval and setting back to default font
        const timeout = setTimeout(() => {
            clearInterval(interval);
            glitchTextRefs.current.forEach((el) => {
                if (el) el.style.fontFamily = "Arial";
            });
        }, times * delay);

        // Return method to be called on final intialization
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className={(className || "") + " landing"}>
            <div className="mainTextContainer">
                <div ref={(el) => (glitchTextRefs.current[0] = el)} className="glitchText">
                    THIS WEBSITE
                </div>
                <div ref={(el) => (glitchTextRefs.current[1] = el)} className="boldText glitchText">
                    SUCKS.
                </div>
                <div ref={(el) => (glitchTextRefs.current[2] = el)} className="glitchText">
                    LET'S FIX IT.
                </div>
            </div>
        </div>
    );
}
