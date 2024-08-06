import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: -100, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
        >
          <HeroSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
        >
          <FeatureSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
        >
          <Workflow />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "tween", ease: "easeOut" }}
        >
          <Pricing />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "tween", ease: "easeIn" }}
        >
          <Testimonials />
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default App;
