import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
