import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Results from "@/components/Results";
import Process from "@/components/Process";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Work />
        <Results />
        <Services />
        <Process />
        <About />
        <Clients />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
