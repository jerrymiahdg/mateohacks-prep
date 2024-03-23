import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex w-full justify-center fixed p-5 border-b border-neutral-800">
      <div className="flex max-w-5xl w-full justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          Website
        </Link>
        <div className="flex gap-10">
          <Link to="/login">Login</Link>
          <Link to="/">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
