import { useState, useCallback } from "react";

export function useCount() {
    const [count, setCount] = useState(() => {return 0});
    const increment = useCallback(() => setCount((currentCount) => currentCount + 1), []);
    const decrement = useCallback(() => setCount((currentCount) => currentCount - 1), []);

    return { count, increment, decrement };
}
