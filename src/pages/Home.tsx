import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="nav-div">
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
      <br />

      <div className="grid grid-cols-2 gap-10 px-5 py-5">
        <Link to={"/donor-registration"}>
          <button
            className="overflow-hidden rounded-xl bg-green-500 shadow-md 
  transition hover:shadow-lg w-full mb-3 pb-5 hover:cursor-pointer"
          >
            <h3 className="text-2xl font-serif text-white font-bold">
              Register as a Donor.
            </h3>
            <p>Save lives through organ donation.</p>
          </button>
        </Link>
        <Link to="/receipient-registration">
          <button
            className="overflow-hidden rounded-xl bg-blue-500 shadow-md 
  transition hover:shadow-lg w-full mb-3 pb-5 hover:cursor-pointer"
          >
            <h3 className="text-2xl font-serif text-white font-bold">
              Apply as a Receipient.
            </h3>
            <p>Be connected to generous donors.</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
