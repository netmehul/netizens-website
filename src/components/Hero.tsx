import { Button } from "./ui/Button";

interface HeroProps {
  badge: string;
  heading: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
  image: string;
  imageAlt: string;
}

export function Hero({
  badge,
  heading,
  description,
  primaryCta = "Book Discovery Call",
  secondaryCta = "How We Work",
  image,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-between lg:flex-row gap-12 lg:gap-24 overflow-hidden z-10">
      <div className="flex flex-col items-start justify-center w-full lg:w-[50%] gap-6">
        <div className="flex items-center justify-center px-[18px] py-[8px] bg-[#0E3572]/5 border border-[#0E3572]/10 rounded-[4px]">
          <span className="font-sans font-bold text-[12px] text-regal-navy text-center uppercase tracking-wide">
            {badge}
          </span>
        </div>

        <h1 className="font-headings font-normal text-4xl md:text-[46px] leading-[1.1] md:leading-[1.1] text-carbon-black capitalize">
          {heading}
        </h1>

        <p className="font-sans font-medium text-[14px] md:text-base leading-[22px] md:leading-relaxed text-charcoal max-w-[90%]">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 w-full sm:w-auto">
          <Button variant="primary" className="w-full sm:w-auto">
            {primaryCta}
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto !text-carbon-black !border-[rgba(22,24,27,0.4)] hover:!bg-gray-50 hover:!text-carbon-black"
          >
            {secondaryCta}
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-[50%] flex items-center justify-center relative">
        <div className="relative w-full max-w-[648px] flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
