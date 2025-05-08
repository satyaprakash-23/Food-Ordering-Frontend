import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setisOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setisOnline(true);
    }
    function handleOffline() {
      setisOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;