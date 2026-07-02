import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Desert to Power Initiative",
    country: "Sahel Region",
    sector: "Energy",
    amount: "$20B",
    description: "Transforming the Sahel into the world's largest solar zone, providing clean energy to 250 million people.",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1392095/2026-07-02/rv2y5qycaipq/project-energy-infrastructure.png",
    status: "Active",
  },
  {
    title: "Lagos-Abidjan Highway Corridor",
    country: "West Africa",
    sector: "Infrastructure",
    amount: "$15.6B",
    description: "Constructing a modern highway connecting major economic hubs across five West African nations.",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1392095/2026-07-02/rv2y6kicaipq/project-infrastructure-transport.png",
    status: "Active",
  },
  {
    title: "Technologies for African Agricultural Transformation",
    country: "Pan-African",
    sector: "Agriculture",
    amount: "$1.2B",
    description: "Scaling up proven agricultural technologies to boost food production and improve livelihoods.",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1392095/2026-07-02/rv2y5eacaipq/project-agriculture-development.png",
    status: "Active",
  },
  {
    title: "Africa Health Workforce Initiative",
    country: "East Africa",
    sector: "Health",
    amount: "$3.5B",
    description: "Training and deploying healthcare workers to strengthen health systems across the continent.",
    image: "https://mgx-backend-cdn.metadl.com/generate/images/1392095/2026-07-02/rv2y6xicaipq/project-healthcare-facility.png",
    status: "Pipeline",
  },
];

const sectorColors: Record<string, string> = {
  Energy: "bg-amber-100 text-amber-800",
  Infrastructure: "bg-blue-100 text-blue-800",
  Agriculture: "bg-green-100 text-green-800",
  Health: "bg-rose-100 text-rose-800",
  Education: "bg-purple-100 text-purple-800",
};

export function FeaturedProjects() {
  return (
    <section className="section-padding bg-[hsl(150,10%,98%)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              Discover our flagship initiatives driving sustainable development across Africa.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-[hsl(155,100%,21%)] hover:text-[hsl(155,100%,28%)] cursor-pointer font-semibold">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-[hsl(155,30%,25%)] to-[hsl(200,30%,20%)] relative overflow-hidden">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <Badge className={`${sectorColors[project.sector] || "bg-gray-100 text-gray-800"} border-0 font-medium`}>
                    {project.sector}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold">
                    {project.amount}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{project.country}</span>
                  <span className="mx-1">•</span>
                  <span className={project.status === "Active" ? "text-green-600" : "text-amber-600"}>
                    {project.status}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-[hsl(155,100%,21%)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}