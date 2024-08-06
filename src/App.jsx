import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { Element } from 'react-scroll';
import { Slide } from 'react-reveal';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Element name="heroSection">
          <Slide bottom>
            <HeroSection />
          </Slide>
        </Element>
        <Element name="features">
          <Slide left>
            <FeatureSection />
          </Slide>
        </Element>
        <Element name="workflow">
          <Slide right>
            <Workflow />
          </Slide>
        </Element>
        <Element name="pricing">
          <Slide up>
            <Pricing />
          </Slide>
        </Element>
        <Element name="testimonials">
          <Slide bottom>
            <Testimonials />
          </Slide>
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default App;
