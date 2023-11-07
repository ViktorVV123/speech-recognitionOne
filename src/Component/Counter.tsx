import React, { useState, useRef } from "react";

function HoldButton() {
    const [counter, setCounter] = useState(0);
    const [isHolding, setIsHolding] = useState(false);
    const intervalRef = useRef(null);

    const startCounting = () => {
        setIsHolding(true);
        // @ts-ignore
        intervalRef.current = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);
    };

    const stopAndReset = () => {
        if (isHolding) {
            // @ts-ignore
            clearInterval(intervalRef.current);
            setIsHolding(false);

        }
    };

    return (
        <div>
        <button
            onMouseDown={startCounting}
            onMouseUp={stopAndReset}
            onMouseLeave={stopAndReset}
        >
            time
        </button>
            {counter}
        </div>
    );
}

export default HoldButton;
