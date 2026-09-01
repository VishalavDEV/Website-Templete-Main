import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <Work />
        <Capabilities />
        <Results />
        <Process />
        <Clients />
        <Testimonial />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
