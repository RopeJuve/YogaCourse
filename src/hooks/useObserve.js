import { useEffect, useState } from "react";

export function useObserve(ref, root = null, threshold = "0") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIntersecting(entry.isIntersecting);
      },
      { root, threshold }
    );
    const current = ref.current
    if (current) {
      observer.observe(current);
    }

    return () => {
      observer.unobserve(current);
    };
  }, [ref, root, threshold]);

  return isIntersecting;
}
