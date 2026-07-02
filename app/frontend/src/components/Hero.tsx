import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Accelerating Africa's Economic Transformation",
    subtitle: "Investing in sustainable infrastructure, human capital, and regional integration to build a prosperous Africa.",
    cta: "Learn More",
    ctaSecondary: "Our Strategy",
  },
  {
    title: "Powering Africa's Green Energy Future",
    subtitle: "Financing renewable energy projects across the continent to ensure universal access to clean, affordable power.",
    cta: "Energy Projects",
    ctaSecondary: "Climate Action",
  },
  {
    title: "Empowering Youth & Building Skills",
    subtitle: "Creating opportunities for Africa's young population through education, innovation, and entrepreneurship programs.",
    cta: "Youth Programs",
    ctaSecondary: "Education",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://mgx-backend-cdn.metadl.com/generate/images/1392095/2026-07-02/rv2y4xicaipq/hero-africa-development-skyline.png" 
          alt="Africa development" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,30%,8%)]/90 via-[hsl(155,40%,12%)]/75 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex items-center">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[hsl(155,100%,21%)] hover:bg-[hsl(155,100%,28%)] text-white px-6 py-3 text-sm font-semibold cursor-pointer">
                  {slide.cta}
                </Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 px-6 py-3 text-sm font-semibold cursor-pointer !bg-transparent !hover:bg-white/10">
                  {slide.ctaSecondary}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === current ? "bg-[hsl(45,80%,43%)] w-8" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}