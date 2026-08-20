import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import SubmitStory from "./pages/SubmitStory";
import Stories from "./pages/Stories";
import DonorRegistration from "./pages/DonorRegistration";
import Donors from "./pages/Donors";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/submit-story" element={<SubmitStory />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/donor-registration" element={<DonorRegistration />} />
          <Route path="/donors" element={<Donors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
