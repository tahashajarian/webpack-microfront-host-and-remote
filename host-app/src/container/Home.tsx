import React from "react";
import List from "../components/List";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="text-3xl mx-auto max-w-6xl p-16">
      <div>
        <List />
      </div>
    </div>
  );
};

export default Home;
