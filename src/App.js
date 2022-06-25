import "./index.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Loader from "./components/Loader/Loader";
import React, { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <LoginScreen />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
