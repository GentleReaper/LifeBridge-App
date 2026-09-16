import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import HowItWorks from "./pages/HowItWorks";
import SubmitStory from "./pages/SubmitStory";
import Stories from "./pages/Stories";
import Admin from "./pages/Admin";
import DonorRegistration from "./pages/DonorRegistration";
import Donors from "./pages/Donors";
import RecipientRegistration from "./pages/RecipientRegistration";
import Recipients from "./pages/Recipients";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/submit-story" element={<SubmitStory />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route
            path="/recipient-registration"
            element={<RecipientRegistration />}
          />
          <Route path="/donors" element={<Donors />} />
          <Route path="/recipients" element={<Recipients />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
