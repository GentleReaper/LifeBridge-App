import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mt-3 mb-5 py-10">
        <h1 className="slogan">
          NATIONAL ORGAN & TISSUE REGISTRY • VERIFIED ETHICAL PLATFORM
        </h1>
        <p className="title">
          A profound legacy starts with a{" "}
          <span className="text-blue-600">single decision.</span>
        </p>
      </div>

      <p>
        Connecting living and pledged organ donors, accredited hospital
        transplant teams, and patients awaiting life-saving transplants through
        transparent, secure, and medically verified algorithms.
      </p>

      <div className="grid grid-cols-2 gap-10 px-5 py-5">
        <Link to={"/donor-registration"}>
          <div
            className="overflow-hidden rounded-xl bg-green-500 shadow-md 
  transition hover:shadow-lg w-full mb-3 pb-5"
          >
            <img
              className="story-image"
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
              alt=""
            />
            <h3 className="text-2xl font-serif text-white font-bold">
              Register as a Donor.
            </h3>
            <p>Save lives through organ donation.</p>
          </div>
        </Link>
        <Link to="/receipient-registration">
          <div
            className="overflow-hidden rounded-xl bg-blue-500 shadow-md 
  transition hover:shadow-lg w-full mb-3 pb-5"
          >
            <img
              className="story-image"
              src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
              alt=""
            />
            <h3 className="text-2xl font-serif text-white font-bold">
              Apply as a Receipient.
            </h3>
            <p>Be connected to generous donors.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
