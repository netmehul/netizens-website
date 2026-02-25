import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Hero } from '../components/Hero';
import { SeparatorPattern } from '../components/SeparatorPattern';
import { Clients } from '../components/Clients';
import { MvpProblem } from '../components/mvp-problem';
import { ServiceScope } from '../components/ServiceScope';
import iconRoadmap from "../assets/images/proto-to-prod-icons/mvp-roadmap.svg";
import iconUxDesign from "../assets/images/proto-to-prod-icons/mvp-ux-design.svg";
import iconFullstack from "../assets/images/proto-to-prod-icons/full-stack.svg";
import iconRapidIterate from "../assets/images/proto-to-prod-icons/rapid-iterate.svg";
import iconV2Ready from "../assets/images/proto-to-prod-icons/v2-readiness.svg";
import iconOngoingImprove from "../assets/images/proto-to-prod-icons/on-going-improve.svg";
import { ServiceCTASection } from '../components/ServiceCTASection';
import { BuildToLaunch } from '../components/BuildToLaunch';
import { BlogInsights } from '../components/BlogInsights';
import { RightFit } from '../components/RightFit';
import { Testimonials } from '../components/Testimonials';
import { FAQChat } from '../components/FAQChat';
import heroImg from '../assets/images/product-developement.svg';

const MvpDev: React.FC = () => {
    useEffect(() => {
        document.title = "MVP Development Company | From Idea to Scalable Product";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Launch your MVP faster without cutting corners. We deliver scalable MVP development services for startups and SaaS teams.");
        }
    }, []);

    return (
        <div className="bg-[#FFFAFA] min-h-screen text-black font-sans selection:bg-black selection:text-white">
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Home', href: '/' },
                    { label: 'Service', href: '/services' },
                    { label: 'Product Development' }
                ]}
                className="pt-[96px] max-w-7xl mx-auto px-4"
            />
            <main>
                <Hero
                    badge="Build → Validate → Scale"
                    heading="An MVP Development Company Built For Speed And Scale"
                    description="From rapid prototyping to production-ready MVPs, we build SaaS products that validate fast and scale without rewrites."
                    image={heroImg}
                    imageAlt="MVP Development Process"
                />
                <SeparatorPattern />
                <Clients />
                <MvpProblem />
                <SeparatorPattern />
                <ServiceScope
                    badge="From prototype to production."
                    heading="The scope of our MVP development services"
                    cards={[
                        { icon: iconRoadmap, title: "MVP Feature Prioritization & Roadmap", description: "Decide what to build first and what to cut so your MVP stays lean and launchable." },
                        { icon: iconUxDesign, title: "MVP UX Design", description: "Simple, usable UI that reduces drop-offs and improves adoption from day one." },
                        { icon: iconFullstack, title: "Full-Stack Build", description: "Web and mobile MVP development with reliable engineering and clean code practices." },
                        { icon: iconRapidIterate, title: "Rapid Iterations", description: "Ship in short cycles, learn from feedback, and improve without rewrites." },
                        { icon: iconV2Ready, title: "V2 Readiness", description: "Prepare your MVP for scale: roadmap, architecture improvements, and tech upgrades." },
                        { icon: iconOngoingImprove, title: "Ongoing Improvements", description: "Support after launch: bug fixes, enhancements, monitoring, and stability work." },
                    ]}
                    ctaCards={[
                        { title: "Scale Your Team", description: "Add vetted engineers fast to ship V2 without hiring delays.", ctaLabel: "Explore Staff Augmentation" },
                        { title: "On-Demand Support", description: "Keep uptime high while you ship updates, handle traffic, and reduce tech debt.", ctaLabel: "Explore Support & Scale" },
                    ]}
                />
                <BuildToLaunch />
                <SeparatorPattern />
                <RightFit
                    theme="dark"
                    badge="Is This the Right MVP Build for You?"
                    heading="This is a good fit if you…"
                    goodFitItems={[
                        "You're a founder or operator solving a real, validated problem",
                        "You want to launch fast, but not at the cost of quality or scalability",
                        "You care about what to build first, not building everything",
                        "You plan to iterate, improve, and scale after launch",
                        "You want a product team that thinks with you, not just executes tickets",
                    ]}
                    notFitItems={[
                        "You only need a clickable or visual-only prototype",
                        "You're looking for the cheapest possible build",
                        "You want to outsource thinking and just hand over specs",
                        "You're not planning to maintain or scale the product post-launch",
                    ]}
                />
                <SeparatorPattern />
                <Testimonials />
                <FAQChat faqs={[
                    { question: "Do you work with early-stage startups?", answer: "Yes. We work with early-stage founders, bootstrapped teams, and funded startups. What matters most is having a real problem to solve and a clear goal for the MVP." },
                    { question: "Can we start small before committing long-term?", answer: "Absolutely. We offer scoped discovery sprints and small initial engagements so you can evaluate our work before scaling up the collaboration." },
                    { question: "How long does MVP development usually take?", answer: "Most MVPs take 6–12 weeks depending on complexity. We define scope tightly upfront so there are no surprises, and we ship iteratively throughout." },
                    { question: "Do you help decide what features go into the MVP?", answer: "Yes — that's one of the most valuable things we do. We run a structured scoping session to cut the fluff and identify the smallest set of features that validates your core hypothesis." },
                    { question: "Do you handle both design and development?", answer: "Yes. We handle UI/UX design, frontend, backend, and infrastructure. You get a single accountable team end to end." },
                    { question: "What happens after the MVP is launched?", answer: "We help you interpret early user feedback, prioritize the next iteration, and continue development. We can also hand off cleanly if you bring development in-house." },
                ]} />
                <BlogInsights />
                <SeparatorPattern />
                <ServiceCTASection
                    heading={<>Build, launch, and <br className="hidden sm:block" /> validate your MVP.</>}
                    description="We help you ship an MVP that users can actually use, test, and pay for."
                    subtext="Bring the idea. We'll help shape the execution."
                />
            </main>
            <Footer />
        </div>
    );
};

export default MvpDev;
