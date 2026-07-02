import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statistics } from "@/components/Statistics";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { NewsEvents } from "@/components/NewsEvents";
import { TopicsCountries } from "@/components/TopicsCountries";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Statistics />
        <FeaturedProjects />
        <NewsEvents />
        <TopicsCountries />
      </main>
      <Footer />
    </div>
  );
}