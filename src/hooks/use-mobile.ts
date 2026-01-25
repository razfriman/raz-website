import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

/**
 * Hook that subscribes to derived boolean state (mobile vs desktop)
 * instead of continuous width values, reducing re-render frequency.
 *
 * Per React Best Practices rule 5.8 (Subscribe to Derived State):
 * Only re-renders when the boolean result changes, not on every pixel change.
 */
export function useIsMobile() {
  // Lazy state initialization to avoid SSR hydration mismatches
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MOBILE_QUERY).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    // Use mql.matches directly - only triggers on boolean state changes
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener("change", onChange);
    // Sync initial value
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
