import "./App.css";
// import LoginScreen from "./components/LoginScreen/LoginScreen";
// import Loader from './components/Loader/Loader';
import React, { useState, useEffect } from "react";
import {
  withAuthenticator,
  AmplifySignOut,
  Authenticator,
} from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My App Content</h2>
      </header>
    </div>
  );
}
export default withAuthenticator(App);
