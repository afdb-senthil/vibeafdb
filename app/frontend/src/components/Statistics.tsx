import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, MapPin, Briefcase } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 47.2,
    suffix: "B",
    prefix: "$",
    label: "Total Investments",
    description: "Cumulative approvals since inception",
  },
  {
    icon: MapPin,
    value: 54,
    suffix: "",
    prefix: "",
    label: "Member Countries",
    description: "Regional and non-regional members",
  },
  {
    icon: Briefcase,
    value: 1250,
    suffix: "+",
    prefix: "",
    label: "Active Projects",
    description: "Across all sectors and regions",
  },
  {
    icon: Users,
    value: 335,
    suffix: "M",
    prefix: "",
    label: "People Reached",
    description: "Beneficiaries of our operations",
  },
];

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const displayValue = value >= 100 ? Math.round(count) : count.toFixed(1);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-[hsl(155,100%,21%)]" style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}{displayValue}{suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="section-padding bg-white border-b border-border">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over five decades, the African Development Bank has been at the forefront of Africa's transformation.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-[hsl(150,10%,98%)] border border-border hover:border-[hsl(155,100%,21%)]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(155,40%,92%)] mb-4">
                <stat.icon className="h-6 w-6 text-[hsl(155,100%,21%)]" />
              </div>
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="font-semibold text-foreground mt-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}