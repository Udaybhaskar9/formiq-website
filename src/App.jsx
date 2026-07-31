import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import AppScreens from "./components/AppScreens";
import FAQ from "./components/FAQ";
import AppPromo from "./components/AppPromo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div>

      <Navbar />

      <main>

        <Hero />

        <Features />

        <HowItWorks />

        <DashboardPreview />

        <AppScreens />

        <FAQ />

        <AppPromo />

        <Contact />

      </main>


      <Footer />

    </div>
  );
}