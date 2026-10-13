import { Link } from "react-router-dom";
import { Heart, Activity, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="main">
      <div className="nav-div">
        <h1 className="slogan">
          NATIONAL ORGAN & TISSUE REGISTRY • VERIFIED ETHICAL PLATFORM
        </h1>
        <p className="title">
          A profound legacy starts with a
          <span className="text-blue-600"> single decision.</span>
        </p>
      </div>

      <p className="description">
        Connecting living and pledged organ donors, accredited hospital
        transplant teams, and patients awaiting life-saving transplants through
        transparent, secure, and medically verified algorithms.
      </p>
      <br />

      <div className="hero-container">
        <Link to="/donor-registration">
          <button className="donorHero">
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center ring-1 ring-blue-400/50 shadow-md">
                <Heart className="w-6 h-6 fill-white stroke-none" />
              </div>
              <h5 className="text-xs font-mono tracking-widest uppercase bg-emerald-700/60 text-emerald-100 px-3 py-1 rounded-full border border-emerald-500/40">
                PLEDGE LIFE
              </h5>
            </div>
            <h2 className="text-2xl font-bold mb-4">Give Hope. Save Lives.</h2>

            <p>
              Pledge your organs or register for living donation. Takes less
              than 3 minutes to complete your encrypted digital donor card.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-200 group-hover:text-white transition-colors mt-8">
              <span>Submit Donor Application</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </Link>
        <Link to="/recipient-registration">
          <button className="recipientHero">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center ring-1 ring-blue-400/50 shadow-md">
                <Activity className="w-6 h-6 fill-white stroke-none" />
              </div>
              <div>
                <h5 className="text-xs font-mono tracking-widest uppercase bg-emerald-700/60 text-emerald-100 px-3 py-1 rounded-full border border-blue-500/40">
                  FIND MATCH
                </h5>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">One Step. New Life.</h2>
            <p>
              Submit your medical urgency details & ABO blood group to link with
              certified transplant hospitals and enter the matching waitlist.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-blue-200 group-hover:text-white transition-colors mt-8">
              <span>Submit Recipient Application</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
