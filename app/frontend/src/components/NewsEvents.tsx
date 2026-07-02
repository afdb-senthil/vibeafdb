import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const news = [
  {
    type: "Press Release",
    date: "June 28, 2026",
    title: "AfDB Approves $500 Million for Pan-African Digital Infrastructure",
    excerpt: "The Board of Directors approved a landmark investment to accelerate digital connectivity across 15 African nations.",
  },
  {
    type: "Feature Story",
    date: "June 25, 2026",
    title: "How Solar Energy is Transforming Rural Communities in East Africa",
    excerpt: "A look at the impact of the Bank's renewable energy investments on rural livelihoods and economic opportunities.",
  },
  {
    type: "Press Release",
    date: "June 22, 2026",
    title: "Annual Meetings 2026: Leaders Commit to Climate-Resilient Development",
    excerpt: "African heads of state and development partners pledge accelerated action on climate adaptation and green growth.",
  },
];

const events = [
  {
    date: "Jul 15-17",
    title: "Africa Investment Forum 2026",
    location: "Nairobi, Kenya",
  },
  {
    date: "Aug 5-6",
    title: "Youth Entrepreneurship Summit",
    location: "Accra, Ghana",
  },
  {
    date: "Sep 12-14",
    title: "African Economic Conference",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    date: "Oct 8-9",
    title: "Climate Finance Forum",
    location: "Cairo, Egypt",
  },
];

export function NewsEvents() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* News Column */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest News</h2>
              <Button variant="ghost" className="text-[hsl(155,100%,21%)] hover:text-[hsl(155,100%,28%)] cursor-pointer font-semibold text-sm">
                All News <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-6">
              {news.map((item, index) => (
                <article
                  key={index}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-[hsl(150,10%,98%)] transition-colors cursor-pointer border border-transparent hover:border-border"
                >
                  <div className="hidden sm:block w-1 rounded-full bg-[hsl(155,100%,21%)]/20 group-hover:bg-[hsl(155,100%,21%)] transition-colors flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-[hsl(155,100%,21%)] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events Column */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Events</h2>
              <Button variant="ghost" className="text-[hsl(155,100%,21%)] hover:text-[hsl(155,100%,28%)] cursor-pointer font-semibold text-sm">
                All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg border border-border hover:border-[hsl(155,100%,21%)]/30 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[hsl(155,40%,92%)] flex flex-col items-center justify-center">
                      <Clock className="h-4 w-4 text-[hsl(155,100%,21%)] mb-0.5" />
                      <span className="text-[10px] font-semibold text-[hsl(155,100%,21%)]">{event.date.split(" ")[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-foreground group-hover:text-[hsl(155,100%,21%)] transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">{event.location}</p>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}