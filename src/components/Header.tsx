import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import bulletIcon from "../assets/bullet-icons/bullet-icon.svg";

export function Header({ isThankYou = false }: { isThankYou?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMegaMenuOpen, setIsServicesMegaMenuOpen] = useState(false);

  // Reusable nav link classes
  const navLinkClass =
    "flex items-center gap-[8px] px-[10px] py-[24px] cursor-pointer font-sans font-medium text-[12px] text-[#58595b] uppercase hover:text-black transition-colors";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFAFA] border-b border-[rgba(88,89,91,0.1)]">
      <div
        className={`max-w-[1440px] mx-auto px-4 md:px-[40px] flex items-center ${isThankYou ? "justify-center py-4" : "justify-between min-h-[96px]"
          }`}
      >
        {/* Logo */}
        <div className="flex flex-col justify-center items-start shrink-0 w-auto md:w-[250px]">
          {isThankYou ? (
            <Link to="/">
              <Logo className="h-[32px] md:h-[48px] overflow-clip relative shrink-0 w-auto md:w-[160px]" />
            </Link>
          ) : (
            <Logo className="h-[32px] md:h-[48px] overflow-clip relative shrink-0 w-auto md:w-[160px]" />
          )}
        </div>

        {/* Desktop Navigation */}
        {!isThankYou && (
          <nav className="hidden md:flex flex-[1_0_0] justify-center items-center gap-[8px]">
            {/* Services with Mega Menu Toggle */}
            <div>
              <button
                className={navLinkClass}
                onClick={() => setIsServicesMegaMenuOpen(!isServicesMegaMenuOpen)}
                onBlur={() => setTimeout(() => setIsServicesMegaMenuOpen(false), 200)}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${isServicesMegaMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {/* Responsive Mega Menu */}
              {isServicesMegaMenuOpen && (
                <div className="absolute top-[96px] left-1/2 -translate-x-1/2 w-[1200px] lg:w-[1200px] bg-gray-100 border-[1.5px] border-[rgba(14,53,114,0.2)] shadow-[0px_20px_40px_rgba(0,0,0,0.08)] rounded-[18px] overflow-hidden grid grid-cols-3 grid-rows-2 gap-[1px] z-50">
                  {/* Category 1 */}
                  <Link to="/mvp-development" className="bg-white p-6 hover:bg-gray-50 transition-colors flex flex-col gap-4 group/card">
                    <h3 className="font-['Geist',sans-serif] text-[16px] text-[#16181b] tracking-[0.8px] uppercase font-medium">
                      Product Development
                    </h3>
                    <ul className="flex flex-col gap-3 relative z-10">
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">MVP Design & Development</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Prototype → V2</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">MVP Rescue Sprint</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Web / Mobile / SaaS builds</span>
                      </li>
                    </ul>
                  </Link>

                  {/* Category 2 */}
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors flex flex-col gap-4 group/card">
                    <h3 className="font-['Geist',sans-serif] text-[16px] text-[#16181b] tracking-[0.8px] uppercase font-medium">
                      Workflow Digitization
                    </h3>
                    <ul className="flex flex-col gap-3 relative z-10">
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">ERP / CRM Customization</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Integration Hub</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Internal Tools</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Reporting & Dashboards</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3 */}
                  <Link to="/support-and-scale" className="bg-white p-6 hover:bg-gray-50 transition-colors flex flex-col gap-4 group/card">
                    <h3 className="font-['Geist',sans-serif] text-[16px] text-[#16181b] tracking-[0.8px] uppercase font-medium">
                      Support & Scale
                    </h3>
                    <ul className="flex flex-col gap-3 relative z-10">
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Maintenance & Support</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">SLAs</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Performance</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Cloud / DevOps</span>
                      </li>
                    </ul>
                  </Link>

                  {/* Category 4 */}
                  <Link to="/staff-augmentation" className="bg-white p-6 hover:bg-gray-50 transition-colors flex flex-col gap-4 group/card">
                    <h3 className="font-['Geist',sans-serif] text-[16px] text-[#16181b] tracking-[0.8px] uppercase font-medium">
                      Staff Augmentation
                    </h3>
                    <ul className="flex flex-col gap-3 relative z-10">
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Hire Dedicated Developers</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Team Extension</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Pod Model</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Trial Engagement</span>
                      </li>
                    </ul>
                  </Link>

                  {/* Category 5 */}
                  <div className="bg-white p-6 hover:bg-gray-50 transition-colors flex flex-col gap-4 group/card">
                    <h3 className="font-['Geist',sans-serif] text-[16px] text-[#16181b] tracking-[0.8px] uppercase font-medium">
                      AI Consulting & Automation
                    </h3>
                    <ul className="flex flex-col gap-3 relative z-10">
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Workflow Automation (AI-driven)</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">AI Integration (LLMs, APIs)</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">AI Prototyping & POCs</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">Prompt Engineering</span>
                      </li>
                      <li className="flex items-center gap-[6px] text-[12px] font-medium text-[#58595b] uppercase hover:text-regal-navy cursor-pointer transition-colors group">
                        <img src={bulletIcon} alt="" className="size-[16px] shrink-0" />
                        <span className="flex-1">AI Automation Sprint</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA 6th Card */}
                  <div className="relative bg-regal-navy flex flex-col items-start justify-center p-8 gap-4 overflow-hidden group cursor-pointer">
                    {/* Noise Texture Overlay exactly like CTASection */}
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay transition-opacity duration-300 group-hover:opacity-[0.05]"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "150px 150px",
                      }}
                    />

                    <h3 className="relative z-10 font-['Sora',sans-serif] text-[30px] leading-[36px] tracking-[-1.2px] text-white">
                      From idea to impact delivered with precision
                    </h3>
                    <p className="relative z-10 font-sans font-medium text-[14px] leading-[22px] text-white/90">
                      Design, build, and evolve your product with the right tech, the right team, and AI-powered workflows.
                    </p>
                    <div className="relative z-10 mt-2 font-sans font-medium text-[12px] text-white uppercase underline underline-offset-4 decoration-1 hover:text-gray-200 transition-colors">
                      Explore
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={navLinkClass}>How We Work</div>
            <div className={navLinkClass}>Case Studies</div>
            <div className={navLinkClass}>Insights</div>
            <div className={navLinkClass}>
              Company
              <ChevronDown size={18} />
            </div>
          </nav>
        )}

        {/* CTA Button and Mobile Toggle */}
        {!isThankYou && (
          <div className="flex items-center gap-4 w-auto md:w-[250px] justify-end">
            <Button
              size="sm"
              className="hidden md:inline-flex text-xs md:text-[14px] px-[18px] py-[10px]"
            >
              Book Discovery Call
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation Drawer */}
      {!isThankYou && isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto">
          <button
            className="flex items-center justify-between w-full py-4 px-6 text-left font-medium text-[13px] text-[#58595b] uppercase hover:bg-gray-50 transition-colors border-b border-gray-100"
            onClick={() => setIsServicesMegaMenuOpen(!isServicesMegaMenuOpen)}
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${isServicesMegaMenuOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Mobile Mega Menu Expansion list */}
          {isServicesMegaMenuOpen && (
            <div className="flex flex-col bg-gray-50 border-b border-gray-100 divide-y divide-gray-100/50">
              <Link to="/mvp-development" className="block px-8 py-3 text-[13px] font-semibold text-regal-navy" onClick={() => setIsMobileMenuOpen(false)}>Product Development</Link>
              <div className="px-8 py-3 text-[13px] font-semibold text-regal-navy">Workflow Digitization</div>
              <Link to="/support-and-scale" className="block px-8 py-3 text-[13px] font-semibold text-regal-navy" onClick={() => setIsMobileMenuOpen(false)}>Support & Scale</Link>
              <Link to="/staff-augmentation" className="block px-8 py-3 text-[13px] font-semibold text-regal-navy" onClick={() => setIsMobileMenuOpen(false)}>Staff Augmentation</Link>
              <div className="px-8 py-3 text-[13px] font-semibold text-regal-navy">AI Consulting & Automation</div>
            </div>
          )}

          <div className="flex items-center w-full py-4 px-6 font-medium text-[13px] text-[#58595b] uppercase hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
            How We Work
          </div>
          <div className="flex items-center w-full py-4 px-6 font-medium text-[13px] text-[#58595b] uppercase hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
            Case Studies
          </div>
          <div className="flex items-center w-full py-4 px-6 font-medium text-[13px] text-[#58595b] uppercase hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
            Insights
          </div>
          <div className="flex items-center justify-between w-full py-4 px-6 font-medium text-[13px] text-[#58595b] uppercase hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100">
            Company
            <ChevronDown size={18} />
          </div>

          <div className="px-6 py-6 mt-2">
            <Button size="sm" className="w-full justify-center py-[14px] text-[15px]">
              Book Discovery Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
