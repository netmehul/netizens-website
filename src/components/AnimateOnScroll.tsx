import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LoadVariant = "hero" | "default";
type ScrollVariant = "fadeUp" | "slideLeft" | "slideRight" | "scaleIn" | "slideUpBounce" | "revealLeft" | "revealRight";

interface AnimateOnLoadProps {
    children: ReactNode;
    className?: string;
    variant?: LoadVariant;
}

const loadVariants: Record<LoadVariant, gsap.TweenVars> = {
    hero: {
        from: { y: 20, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.7, delay: 0.08, ease: "power3.out" },
    },
    default: {
        from: { y: 16, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.55, delay: 0.1, ease: "power2.out" },
    },
};

export function AnimateOnLoad({
    children,
    className = "",
    variant = "hero",
}: AnimateOnLoadProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const v = loadVariants[variant];
        gsap.fromTo(el, v.from as gsap.TweenVars, v.to as gsap.TweenVars);
    }, [variant]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    variant?: ScrollVariant;
}

const scrollVariants: Record<ScrollVariant, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
    fadeUp: {
        from: { y: 22, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
    },
    slideLeft: {
        from: { x: -36, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    },
    slideRight: {
        from: { x: 36, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    },
    scaleIn: {
        from: { scale: 0.97, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out", transformOrigin: "center center" },
    },
    slideUpBounce: {
        from: { y: 28, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.12)" },
    },
    revealLeft: {
        from: { x: -24, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
    },
    revealRight: {
        from: { x: 24, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
    },
};

export function AnimateOnScroll({
    children,
    className = "",
    variant = "fadeUp",
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const v = scrollVariants[variant];
        const anim = gsap.fromTo(el, v.from, {
            ...v.to,
            scrollTrigger: {
                trigger: el,
                start: "top 88%",
            },
        });

        return () => anim.kill();
    }, [variant]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
