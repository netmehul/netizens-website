import { useState } from "react";
import { SidePattern } from "./SidePattern";

// ──────────────────────────────────────────────
// Testimonial Data
// ──────────────────────────────────────────────
interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    // Avatar initials for placeholder (no external images)
    initials: string;
    avatarColor: string;
    // Video placeholder label
    videoLabel: string;
    tall: boolean; // Whether this card should render tall
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Netizens turned a messy idea into a working MVP fast. Clear weekly progress, no drama, and the UX came out better than we expected.",
        name: "Sarah Jones",
        role: "Founder, SaaS Startup",
        initials: "SJ",
        avatarColor: "bg-regal-navy",
        videoLabel: "Watch Sarah's story",
        tall: true,
    },
    {
        id: 2,
        quote: "We replaced spreadsheets and follow-ups with one workflow that actually matches how our team works. Errors dropped and reporting finally makes sense.",
        name: "Ben",
        role: "Ops Lead",
        initials: "B",
        avatarColor: "bg-[#264980]",
        videoLabel: "Watch Ben's story",
        tall: false,
    },
    {
        id: 3,
        quote: "We added engineers in days, not weeks. They wrote production-quality code and fit into our sprint cadence without hand-holding.",
        name: "Myra",
        role: "CTO",
        initials: "M",
        avatarColor: "bg-[#3EAFD1]",
        videoLabel: "Watch Myra's story",
        tall: false,
    },
    {
        id: 4,
        quote: "The AI workflow assessment was practical. We left with 3 clear use cases, effort estimates, and one automation we could deploy.",
        name: "Jeremiah",
        role: "Head of Operations",
        initials: "J",
        avatarColor: "bg-regal-navy",
        videoLabel: "Watch Jeremiah's story",
        tall: true,
    },
];

// ──────────────────────────────────────────────
// Single Card with Flip Effect
// ──────────────────────────────────────────────
function TestimonialCard({ t, height }: { t: Testimonial; height: string }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`relative w-full ${height} cursor-pointer`}
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            {/* Card inner — the flipping element */}
            <div
                className="relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {/* ──── FRONT FACE — Testimonial ──── */}
                <div
                    className="absolute inset-0 w-full h-full bg-[#eeecf0] border border-charcoal/10 rounded-[10px] p-[18px] flex flex-col gap-[18px] items-start"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Quote mark */}
                    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" className="shrink-0 opacity-40">
                        <path d="M0 22V13.6C0 9.33333 1.13333 6.06667 3.4 3.8C5.66667 1.26667 8.93333 0 13.2 0V4C10.6667 4 8.73333 4.8 7.4 6.4C6.06667 7.73333 5.4 9.73333 5.4 12.4H10.2V22H0ZM16.8 22V13.6C16.8 9.33333 17.9333 6.06667 20.2 3.8C22.4667 1.26667 25.7333 0 30 0V4C27.4667 4 25.5333 4.8 24.2 6.4C22.8667 7.73333 22.2 9.73333 22.2 12.4H27V22H16.8Z" fill="#16181B" />
                    </svg>

                    {/* Quote text */}
                    <p className="flex-1 font-sans font-medium text-[15px] leading-[24px] text-carbon-black w-full">
                        {t.quote}"
                    </p>

                    {/* User info */}
                    <div className="flex items-center gap-2 w-full">
                        <div className={`w-[42px] h-[42px] rounded-full ${t.avatarColor} flex items-center justify-center shrink-0`}>
                            <span className="font-sans font-bold text-sm text-white">{t.initials}</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <p className="font-sans font-medium text-[15px] leading-[24px] text-carbon-black">{t.name}</p>
                            <p className="font-sans font-normal text-[12px] text-charcoal">{t.role}</p>
                        </div>
                    </div>
                </div>

                {/* ──── BACK FACE — Video Preview ──── */}
                <div
                    className="absolute inset-0 w-full h-full bg-regal-navy rounded-[10px] flex flex-col items-center justify-center gap-4 p-[18px]"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    {/* Play button ring */}
                    <div className="w-16 h-16 rounded-full border-2 border-snow-white/40 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 3L17 10L5 17V3Z" fill="white" />
                        </svg>
                    </div>
                    <p className="font-sans font-medium text-sm text-snow-white text-center">{t.videoLabel}</p>
                    <p className="font-sans font-normal text-xs text-snow-white/60 text-center">Click to watch</p>

                    {/* Decorative lines */}
                    <div className="absolute bottom-4 left-4 right-4 h-px bg-white/10" />
                    <div className="absolute bottom-8 left-4 right-4 h-px bg-white/5" />
                </div>
            </div>
        </div>
    );
}


// ──────────────────────────────────────────────
// Main Section
// ──────────────────────────────────────────────
export function Testimonials() {
    const tallCards = testimonials.filter(t => t.tall);
    const shortCards = testimonials.filter(t => !t.tall);

    return (
        <section className="w-full bg-[#FFFAFA] py-12 md:py-16 overflow-hidden relative">
            <SidePattern invert={true} />
            <div className="w-full max-w-[1320px] mx-auto px-4 flex flex-col items-center gap-10">

                {/* ── Header ── */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <div className="bg-regal-navy/5 border border-regal-navy/10 inline-flex items-center justify-center px-[18px] py-[8px] rounded-[4px]">
                        <span className="font-sans font-bold text-[12px] text-regal-navy text-center">
                            Results from the wild
                        </span>
                    </div>
                    <h2 className="font-headings font-normal text-[30px] text-carbon-black">
                        What it's like to work with us
                    </h2>
                    <p className="font-sans font-medium text-[14px] leading-[22px] text-charcoal text-center max-w-[460px]">
                        Real projects. Real teams. Real results across product development, AI consulting, and support.
                    </p>
                </div>

                {/* ── Card Grid ── */}
                {/* Desktop: 3-col layout — tall | 2 short stacked | tall */}
                <div className="w-full hidden lg:flex gap-6">
                    {/* Col 1: tall card — fixed height is the source of truth */}
                    <div className="flex-1 h-[400px]">
                        <TestimonialCard t={tallCards[0]} height="h-full" />
                    </div>

                    {/* Col 2: same height as tall cards, split equally between 2 cards */}
                    <div className="flex flex-col gap-6 w-[424px] h-[400px]">
                        <div className="flex-1 min-h-0">
                            <TestimonialCard t={shortCards[0]} height="h-full" />
                        </div>
                        <div className="flex-1 min-h-0">
                            <TestimonialCard t={shortCards[1]} height="h-full" />
                        </div>
                    </div>

                    {/* Col 3: tall card */}
                    <div className="flex-1 h-[400px]">
                        <TestimonialCard t={tallCards[1]} height="h-full" />
                    </div>
                </div>

                {/* Mobile: all cards stacked in a single column  */}
                <div className="lg:hidden w-full flex flex-col gap-4">
                    {testimonials.map(t => (
                        <TestimonialCard key={t.id} t={t} height="h-[240px]" />
                    ))}
                </div>

            </div>
        </section>
    );
}
