import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import LoginPage from "../container/Login";
const RemoteApp1 = React.lazy(() => import("remote/Module"));

type Props = {};

const MainRoutes = (props: Props) => {
  const logOut = () => {
    console.log("this app should redirect to login page");
  };
  return (
    <Routes>
      <Route
        path="/about"
        element={
          <div>
            <h1>about54</h1>
          </div>
        }
      />
      <Route
        path="/users"
        element={
          <div>
            <h1>users</h1>
          </div>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/remoteApp1"
        element={
          <Suspense fallback={<span>loading...</span>}>
            <RemoteApp1 token="invalid_token" logOut={logOut} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
