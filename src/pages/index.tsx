import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        to: '/mvp-development',
        label: '01',
        title: 'Product Development',
        description: 'From idea to scalable product. Launch your MVP faster without cutting corners.',
        tags: ['MVP', 'SaaS', 'Web / Mobile'],
    },
    {
        to: '/staff-augmentation',
        label: '02',
        title: 'Staff Augmentation',
        description: 'On-demand engineering capacity with dedicated developers and team extension.',
        tags: ['Dedicated Devs', 'Pods', 'Trial'],
    },
    {
        to: '/workflow-digitization',
        label: '03',
        title: 'Workflow Digitization',
        description: 'Streamline approvals, reporting, and handoffs with ERP/CRM customization and automation.',
        tags: ['ERP / CRM', 'Integrations', 'Automation'],
    },
    {
        to: '/support-and-scale',
        label: '04',
        title: 'Support & Scale',
        description: 'Post-launch support with SLAs, DevOps monitoring, and performance optimization.',
        tags: ['SLAs', 'DevOps', 'Performance'],
    },
    {
        to: '/ai-consulting',
        label: '05',
        title: 'AI Consulting & Automation',
        description: 'AI-driven workflow automation, LLM integrations, prototyping, and prompt engineering.',
        tags: ['LLMs', 'Automation', 'POCs'],
    },
];

const Index: React.FC = () => {
    useEffect(() => {
        document.title = "Netizens | Main Website";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Welcome to the Netizens main website.");
        }
    }, []);

    return (
        <div className="bg-snow-white min-h-screen text-carbon-black font-sans selection:bg-regal-navy selection:text-white">
            <Header />

            {/* Hero */}
            <section className="relative overflow-hidden pt-[96px]">
                <div className="absolute inset-0 bg-regal-navy" />
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '150px 150px',
                    }}
                />

                <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-10 py-24 md:py-36 flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#3EAFD1] animate-pulse" />
                        <span className="font-sans font-medium text-[12px] text-white/80 uppercase tracking-wider">
                            Building with precision since 2020
                        </span>
                    </div>

                    <h1 className="font-headings font-normal text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-2px] text-white max-w-[900px]">
                        From idea to impact,{' '}
                        <span className="text-[#3EAFD1]">delivered with precision</span>
                    </h1>

                    <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[28px] text-white/70 max-w-[640px]">
                        Design, build, and evolve your product with the right tech, the right team, and AI-powered workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link
                            to="/mvp-development"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-regal-navy font-sans font-semibold text-[15px] rounded hover:bg-snow-white hover:shadow-lg hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300"
                        >
                            Explore Services
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                <div className="relative z-10 h-px max-w-[1320px] mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </section>

            {/* Services Grid */}
            <section className="relative bg-snow-white py-20 md:py-28">
                <div className="max-w-[1320px] mx-auto px-4 md:px-10">

                    <div className="flex flex-col items-center text-center gap-4 mb-16">
                        <div className="inline-flex items-center justify-center px-[18px] py-[8px] rounded-[4px] bg-[rgba(14,53,114,0.05)] border border-[rgba(14,53,114,0.1)]">
                            <span className="font-sans font-bold text-[12px] text-regal-navy uppercase">
                                What We Do
                            </span>
                        </div>
                        <h2 className="font-headings font-normal text-[30px] md:text-[36px] text-carbon-black tracking-[-1px]">
                            Services built for product teams
                        </h2>
                        <p className="font-sans text-[15px] text-charcoal max-w-[520px] leading-[24px]">
                            Whether you're launching from scratch, scaling your team, or keeping production stable — we've got a service that fits.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link
                                key={service.to}
                                to={service.to}
                                className="group relative flex flex-col justify-between p-7 rounded-[14px] border border-[rgba(14,53,114,0.08)] bg-white hover:border-regal-navy/20 hover:shadow-[0_8px_30px_rgba(14,53,114,0.08)] transition-all duration-300"
                            >
                                <div>
                                    <span className="font-headings text-[13px] text-[#3EAFD1] font-medium tracking-wide">
                                        {service.label}
                                    </span>
                                    <h3 className="font-headings font-normal text-[22px] text-carbon-black mt-2 mb-3 group-hover:text-regal-navy transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="font-sans text-[14px] leading-[22px] text-charcoal">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-block px-3 py-1 rounded-full bg-[rgba(14,53,114,0.04)] text-[11px] font-semibold text-regal-navy/70 uppercase tracking-wide"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 flex items-center gap-1 text-regal-navy font-sans font-semibold text-[13px] uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Index;
