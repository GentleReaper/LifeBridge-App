const Home = () => {
  return (
    <div className="p-10">
      <h1 className="title">Welcome to LifeBridge</h1>
      <p className="mt-4 text-gray-600">
        Connecting lives through organ donation.
      </p>
      <button
        className="mt-6 rounded-lg bg-blue-600
       px-6 py-3 font-semibold text-white hover:bg-blue-700 
       hover:cursor-pointer"
      >
        Get Started
      </button>
    </div>
  );
};
export default Home;
