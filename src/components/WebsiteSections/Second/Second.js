import './Second.css'
import { useEffect, useLayoutEffect, useRef } from 'react'

export default function SecondPanel({ className }) {
    const cardPositioningRefs = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > .75) {
                    setTimeout(() => {
                        [...containerRef.current.children].forEach(card => {
                            card.style.transitionDuration = "1s"
                            card.style.transform = ""
                        })
                    }, 5000);
                }
            },
            {
                threshold: .75
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const cards = Array.from(container.children);
        let firstRects = {}
        cards.forEach(c => {firstRects[c.attributes.pos.value] = c.getBoundingClientRect()});
        container.innerHTML = ""
        cards.sort((a, b) => a.attributes.pos.value - b.attributes.pos.value).forEach(c => container.appendChild(c));
        requestAnimationFrame(() => {
            let lastRects = {}
            cards.forEach(c => {lastRects[c.attributes.pos.value] = c.getBoundingClientRect()});
            cards.forEach((card, i) => {
                const dx = firstRects[i + 1].left - lastRects[i + 1].left;
                const dy = firstRects[i + 1].top - lastRects[i + 1].top;
                card.style.transitionDuration = "0s"
                card.style.transform = `translate(${dx}px, ${dy}px)`;
            });
        });
    }, []);


    return (
        <div id="centerContent" className={(className ?? "") + " textPositioningContainer"}>
            <div>
            <span className="textBlock">There are many things to look out for when building a website. For example:</span>
            <div id="textPositioningContainer" ref={containerRef}>
                {[
                    [3,"order."], [2,"not being in the right"], [1,"information"]
                ].map((pos) => (
                    <span
                        key={pos[0]}
                        pos={pos[0]}
                        className="textBlock"
                        ref={(el) => (cardPositioningRefs.current[pos[0]] = el)}
                    >
                        {pos[1]}
                    </span>
                ))}
                </div>
            </div>
        </div>
    );
}
