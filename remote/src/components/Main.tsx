import React, { Suspense, useEffect } from "react";
import List from "./List";
import Footer from "./Footer";

type Props = {
  token?: string;
  logOut?: () => void;
};

const Main = (props: Props) => {
  // expected token: valid_token | invalid_token
  useEffect(() => {
    if (props.token === "valid_token") {
      console.log("token is valid");
    } else {
      console.log("token is invalid");
      props.logOut && props.logOut();
    }
  }, []);
  return (
    <div>
      <span>{props.token}</span>
      <div className="text-3xl mx-auto max-w-6xl p-16">
        <div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Main;
