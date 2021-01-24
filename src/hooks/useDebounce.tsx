import React from "react";

function useDebounce<T>(state: T, delayInMs: number): T {
  const [debouncedState, setDebouncedState] = React.useState(state);

  React.useEffect(() => {
    const handler = setTimeout(() => setDebouncedState(state), delayInMs);

    return () => clearTimeout(handler);
  }, [state, delayInMs]);

  return debouncedState;
}

export { useDebounce };
