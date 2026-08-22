import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1 className="title">Admin Dashboard</h1>
      <p className="slogan">Welcome to the Admin Dashboard</p>
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
