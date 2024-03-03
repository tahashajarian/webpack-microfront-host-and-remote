import React from "react";
import Navbar from "./Navbar";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  return (
    <div className="p-6 text-center bg-green-50 text-black font-bold">
      Header {props.title}
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
