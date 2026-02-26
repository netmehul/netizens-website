import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SeparatorPattern } from '../components/SeparatorPattern';
import { BookCallHero } from '../components/BookCallHero';
import { EngagementModels } from '../components/EngagementModels';
import { WhatWeCovers } from '../components/WhatWeCovers';
import { ServiceCTASection } from '../components/ServiceCTASection';
import { Testimonials } from '../components/Testimonials';
import { RightFit } from '../components/RightFit';
import { FAQChat } from '../components/FAQChat';
import { AnimateOnLoad, AnimateOnScroll } from '../components/AnimateOnScroll';

const BookCall: React.FC = () => {
    useEffect(() => {
        document.title = "Book a Discovery Call for Product Development | Netizens";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Book a discovery call to plan your MVP, improvements, or automation. We'll align on scope and expectations, then share a practical next-step plan within 24 hours.");
        }
    }, []);

    return (
        <div className="bg-[#FFFAFA] min-h-screen text-black font-sans selection:bg-black selection:text-white">
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Book a Discovery Call' }
                ]}
                className="pt-[96px] max-w-7xl mx-auto px-4"
            />
            <main>
                <AnimateOnLoad variant="hero">
                    <BookCallHero />
                </AnimateOnLoad>
                <SeparatorPattern />
                <AnimateOnScroll variant="slideLeft">
                    <WhatWeCovers />
                </AnimateOnScroll>
                <SeparatorPattern />

                <AnimateOnScroll variant="slideRight">
                    <RightFit
                        theme="light"
                        badge="Before You Book"
                        heading="Who This Call Is Best For"
                        goodFitTitle="You Should Book This Call If You Are…"
                        notFitTitle="This Call Is Not Designed For…"
                        goodFitItems={[
                            "A founder planning an MVP or product improvement roadmap",
                            "A product or engineering team needing additional delivery capacity",
                            "A business looking to digitize workflows or modernize systems",
                            "Exploring AI, automation, or operational efficiency initiatives",
                            "Preparing for scale and need structured post-launch support",
                        ]}
                        notFitItems={[
                            "Students or job seekers (Please visit our Careers page instead)",
                            "Requests for free consulting, unpaid proposals, or detailed estimates without context",
                            "Very early idea-stage discussions without defined goals or direction",
                        ]}
                    />
                </AnimateOnScroll>
                <SeparatorPattern />
                <AnimateOnScroll variant="scaleIn">
                    <EngagementModels
                        theme="dark"
                        badge="Our Engagement Model"
                        heading="From Discovery Call to Clear Next Steps"
                        cards={[
                            {
                                label: "1.",
                                title: "Discovery Call",
                                tags: [],
                                description: "We start with a focused conversation to understand your scope, goals, constraints, and challenges in detail.",
                                color: "yellow",
                            },
                            {
                                label: "2.",
                                title: "Internal Assessment",
                                tags: [],
                                description: "Our team reviews your requirements, evaluates technical complexity, and determines the best delivery model or approach.",
                                color: "cyan",
                            },
                            {
                                label: "3.",
                                title: "Clear Next Steps",
                                tags: [],
                                description: "You receive a proposal, sprint recommendation, or structured next-step plan aligned with your timeline and budget expectations.",
                                color: "yellow",
                            },
                        ]}
                    />
                </AnimateOnScroll>
                <SeparatorPattern />
                <AnimateOnScroll variant="slideUpBounce">
                    <Testimonials />
                </AnimateOnScroll>

                <AnimateOnScroll variant="revealLeft">
                    <FAQChat faqs={[
                        { question: "Is the discovery call free?", answer: "Yes. The discovery call is completely free. It’s a focused conversation to understand your project and explore whether we’re the right fit to work together." },
                        { question: "What happens in a discovery call?", answer: "We discuss your current situation, business goals, technical requirements, and constraints. By the end of the call, you’ll have clarity on possible approaches and next steps." },
                        {
                            question: "How do I start a software project with your team?", answer: "The first step is scheduling a discovery call. From there, we assess scope, suggest the right engagement model, and outline a structured path forward."
                        },
                        { question: "Who will be on the call?", answer: "You’ll speak with a senior team member who understands both product strategy and technical delivery — not a sales-only representative." },
                        {
                            question: "What happens after the call?", answer: "After reviewing your requirements internally, we’ll share a proposal, sprint recommendation, or next-step plan tailored to your goals and timeline."
                        },
                    ]} theme='light' />
                </AnimateOnScroll>
                <SeparatorPattern />
                <AnimateOnScroll variant="revealRight">
                    <ServiceCTASection
                        heading={<>Build, launch, and <br className="hidden sm:block" /> validate your MVP.</>}
                        description={<>A 30–45 minute call to understand your goals and recommend<br className="hidden sm:block" /> the next best step. No pressure, no hard sell, just a clear plan. </>}
                        subtext="We reply within 24 business hours."
                    />
                </AnimateOnScroll>
            </main>
            <Footer />
        </div>
    );
};

export default BookCall;

