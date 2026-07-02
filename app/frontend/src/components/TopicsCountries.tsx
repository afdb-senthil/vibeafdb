import { 
  Zap, 
  Wheat, 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Leaf, 
  Users, 
  Droplets,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const topics = [
  { icon: Zap, label: "Energy", projects: 245, color: "bg-amber-50 text-amber-700 hover:bg-amber-100" },
  { icon: Wheat, label: "Agriculture", projects: 189, color: "bg-green-50 text-green-700 hover:bg-green-100" },
  { icon: Building2, label: "Infrastructure", projects: 312, color: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
  { icon: HeartPulse, label: "Health", projects: 156, color: "bg-rose-50 text-rose-700 hover:bg-rose-100" },
  { icon: GraduationCap, label: "Education", projects: 198, color: "bg-purple-50 text-purple-700 hover:bg-purple-100" },
  { icon: Leaf, label: "Climate Change", projects: 134, color: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" },
  { icon: Users, label: "Gender Equality", projects: 87, color: "bg-pink-50 text-pink-700 hover:bg-pink-100" },
  { icon: Droplets, label: "Water & Sanitation", projects: 142, color: "bg-cyan-50 text-cyan-700 hover:bg-cyan-100" },
];

const regions = [
  { name: "West Africa", countries: 15, investment: "$12.8B", color: "from-green-600 to-green-800" },
  { name: "East Africa", countries: 13, investment: "$10.5B", color: "from-blue-600 to-blue-800" },
  { name: "Southern Africa", countries: 10, investment: "$8.9B", color: "from-amber-600 to-amber-800" },
  { name: "Central Africa", countries: 8, investment: "$6.2B", color: "from-purple-600 to-purple-800" },
  { name: "North Africa", countries: 6, investment: "$9.1B", color: "from-rose-600 to-rose-800" },
];

export function TopicsCountries() {
  return (
    <section className="section-padding bg-[hsl(150,10%,98%)] border-t border-border">
      <div className="container-wide">
        {/* Topics */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Our Focus Areas</h2>
              <p className="text-muted-foreground">Key sectors driving Africa's sustainable development.</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 text-[hsl(155,100%,21%)] hover:text-[hsl(155,100%,28%)] cursor-pointer font-semibold">
              All Topics <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.label}
                className={`group p-5 rounded-xl border border-border bg-white hover:shadow-md transition-all duration-300 cursor-pointer`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${topic.color} transition-colors mb-3`}>
                  <topic.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-[hsl(155,100%,21%)] transition-colors">
                  {topic.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{topic.projects} projects</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Regional Operations</h2>
              <p className="text-muted-foreground">Supporting development across all five African regions.</p>
            </div>
            <Button variant="ghost" className="mt-4 md:mt-0 text-[hsl(155,100%,21%)] hover:text-[hsl(155,100%,28%)] cursor-pointer font-semibold">
              All Countries <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${region.color} p-5 h-full min-h-[140px] flex flex-col justify-between`}>
                  <div>
                    <h3 className="font-semibold text-white text-base">{region.name}</h3>
                    <p className="text-white/70 text-xs mt-1">{region.countries} countries</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-white font-bold text-lg">{region.investment}</p>
                    <p className="text-white/60 text-xs">Total investment</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}