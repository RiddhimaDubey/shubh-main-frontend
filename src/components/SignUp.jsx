import React, { useState } from "react";
import "../styles/SignUp.css";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="logo">LANOS</h1>

        {!showLoginForm ? (
          <>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button className="create-account-btn">Create Account</button>
            </form>

            <div className="divider">
              <hr />
              <span>or Signup with</span>
              <hr />
            </div>

            <button className="google-btn">
              <FaGoogle style={{ marginRight: "10px" }} />
              Signup with Google
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <a href="/login" onClick={handleLoginClick}>
                Login here
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="login-title">Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button className="create-account-btn">Login</button>
            </form>

            <p className="login-link">
              Don't have an account?{" "}
              <a href="/" onClick={(e) => { e.preventDefault(); setShowLoginForm(false); }}>
                Sign up here
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
