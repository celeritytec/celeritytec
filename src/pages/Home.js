
// pages/Home.js
import { HeroSection } from "../components/HeroSection";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { WhyUs }  from "../components/WhyUs";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";

const Home = () => (
  <div className="container-fluid">
    <HeroSection />
    <Services />
    <About />
    <WhyUs />
    <Team />
    <Testimonials />
  </div>
);

export default Home;