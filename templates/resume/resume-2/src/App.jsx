import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfessionalOverview from "./components/ProfessionalOverview";
import Expertise from "./components/Expertise";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Education from "./components/Education";
import Research from "./components/Research";
import Contributions from "./components/Contributions";
import Recognition from "./components/Recognition";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfessionalOverview />
        <Expertise />
        <ExperienceTimeline />
        <Research />
        <Education />
        <Contributions />
        <Recognition />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
