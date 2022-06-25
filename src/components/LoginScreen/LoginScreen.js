import React from "react";

function LoginScreen() {
  return (
    <section>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" autoComplete="off" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          {/*put router link here*/}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  );
}

export default LoginScreen;
