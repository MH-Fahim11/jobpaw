import Categories from "@/components/Categories";
import FeaturedJobs from "@/components/FeaturedJobs";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedJobs />
      <GetStarted />
      <Reviews />
    </main>
  );
}
