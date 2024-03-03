import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <ul className="flex justify-center items-center space-x-4 text-lg text-blue-600 cursor-pointer">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/remoteApp1">Remote App 1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
