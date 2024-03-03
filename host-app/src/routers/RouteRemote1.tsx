import React, { useEffect, useState } from "react";
import ScriptTag from "react-script-tag";
import NotAvailableRemote from "../components/NotAvailableRemote";

type Props = {
  address: string;
};

const RouteRemote1 = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [remoteAppExists, setRemoteAppExists] = useState(true);

  useEffect(() => {
    const checkRemoteApp = async () => {
      try {
        const response = await fetch(props.address);

        if (response.ok) {
          setRemoteAppExists(true);
        } else {
          setRemoteAppExists(false);
        }
      } catch (error) {
        setRemoteAppExists(false);
        console.error("Error checking remote application:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function to check the remote application
    checkRemoteApp();
  }, [props.address]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : remoteAppExists ? (
        <div>
          <ScriptTag
            type="text/javascript"
            src={props.address}
            onError={() => {
              setRemoteAppExists(false);
              console.error("Error loading remote application script");
            }}
          />
        </div>
      ) : (
        <NotAvailableRemote />
      )}
    </>
  );
};

export default RouteRemote1;