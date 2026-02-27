
// React Counter Problem Solution in Action

import { useState } from "react";

export function CounterProblemFixed() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // FIX: Using prev ensures we get the latest state
        setCount(prev => prev + 1);  // prev = 0 → returns 1
        setCount(prev => prev + 1);  // prev = 1 → returns 2
        setCount(prev => prev + 1);  // prev = 2 → returns 3
        // Result after re-render: count = 3
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment 3 times</button>
        </div>
    );
}
