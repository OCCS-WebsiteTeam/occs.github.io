import './Second.css'
import { useEffect, useRef } from 'react'

export default function SecondPanel({ className }) {
    const cardPositioningRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > .75) {
                    // Entire container is in view
                    setTimeout(() => {
                        cardPositioningRefs.current.forEach(el => {
                            el.style.transform = ""; // Clear the transform
                        });
                    }, 1500); // 3 seconds delay
                }
            },
            {
                threshold: .75 // Fully visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={(className ?? "") + " cardPositioningContainer"}>
            {[
                [11,121], [-12,32], [18,191], [14,100],
                [13,20], [14,-30], [22,-100], [7,-123]
            ].map((offset, index) => (
                <div
                    key={index}
                    className="card"
                    style={{transform: `translate(${offset[0]}%, ${offset[1]}%)`}}
                    ref={(el) => (cardPositioningRefs.current[index] = el)}
                >
                    {index === 0 ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id dolor accumsan, egestas neque a, suscipit est." : "Content"}
                </div>
            ))}
        </div>
    );
}
