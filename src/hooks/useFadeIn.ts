import { useEffect, useRef } from "react";

export function useFadeIn(threshold = 0.07) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("vis");
                    }
                });
            },
            { threshold }
        );

        const targets = el.querySelectorAll(".fi");
        if (el.classList.contains("fi")) observer.observe(el);
        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, [threshold]);

    return ref;
}
