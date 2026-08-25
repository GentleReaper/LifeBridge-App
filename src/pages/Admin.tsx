import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="nav-div">
        <h1 className="slogan">MEDICAL ADMINISTRATOR & COORDINATOR CONSOLE</h1>
        <p className="title">LifeBridge Unified Administration Dashboard</p>
      </div>
      <p>
        Real-time management console for monitoring organ donation registries,
        recipient applications, algorithmic matching, and user permissions
        across Kenya's transplant network.
      </p>
      <div className="flex justify-evenly">
        <button className="button">
          <Link to="/donors">Donors</Link>
        </button>
        <button className="button">
          <Link to="/receipients">Receipients</Link>
        </button>
      </div>
    </div>
  );
};
export default Admin;
