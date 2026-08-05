import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import IndustryDetails from "./pages/IndustryDetails";
import BlogDetails from "./pages/BlogDetails";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermCondition from "./pages/policies/TermCondition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-and-conditions" element={<TermCondition />} />

          

          <Route
            path="/industries/:industrySlug"
            element={<IndustryDetails />}
          />

          <Route path="/blog" element={<Blog
           />} />

          <Route
            path="/blog/:blogSlug"
            element={<BlogDetails />}
          />

          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}