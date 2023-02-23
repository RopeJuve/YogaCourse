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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref]);

  return isIntersecting;
}
