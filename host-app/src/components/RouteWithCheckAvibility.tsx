import React, { FC, ReactNode, Suspense } from "react";
import useRemoteAppAvailability from "./useRemoteAppAvailability";
import { Route } from "react-router-dom";

type Props = {
  address: string;
  component: ReactNode;
};

const RouteWithCheckAvibility = (props: Props) => {
  const remoteApp1Exists = useRemoteAppAvailability(props.address);
  return (
    <>
      {remoteApp1Exists ? (
        <Route
          path="/remoteApp1"
          element={
            <Suspense fallback={<span>loading...</span>}>
              {props.component}
            </Suspense>
          }
        />
      ) : (
        <Route
          path="/remoteApp1"
          element={<div>Remote App 1 is not available.</div>}
        />
      )}
      ;
    </>
  );
};

export default RouteWithCheckAvibility;
