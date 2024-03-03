import { useEffect, useState } from "react";

const useRemoteAppAvailability = (remoteAppUrl: string): boolean => {
  const [remoteAppExists, setRemoteAppExists] = useState(true);

  useEffect(() => {
    const checkRemoteApp = async () => {
      try {
        const response = await fetch(remoteAppUrl);

        if (response.ok) {
          // Remote application is accessible
          setRemoteAppExists(true);
        } else {
          // Remote application is not accessible
          setRemoteAppExists(false);
        }
      } catch (error) {
        // An error occurred while trying to fetch the remote entry file
        console.error('Error checking remote application:', error);
        setRemoteAppExists(false);
      }
    };

    // Call the function to check the remote application
    checkRemoteApp();
  }, [remoteAppUrl]);

  return remoteAppExists;
};

export default useRemoteAppAvailability;