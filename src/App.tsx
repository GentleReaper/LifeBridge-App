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
import ReceipientRegistration from "./pages/ReceipientRegistration";
import Donors from "./pages/Donors";
import Receipients from "./pages/Receipients";

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
            path="/receipient-registration"
            element={<ReceipientRegistration />}
          />
          <Route path="/donors" element={<Donors />} />
          <Route path="/receipients" element={<Receipients />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
