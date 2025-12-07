import React, { useState } from "react";

function LoginPage() {
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="form-container">
      {!showForgot ? (
        <>
          <h2>User Login</h2>

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />

          <button className="btn">Login</button>

          <p className="link" onClick={() => setShowForgot(true)}>
            Forgot Password?
          </p>
        </>
      ) : (
        <>
          <h2>Reset Password</h2>

          <input type="email" placeholder="Enter Your Email" />

          <button className="btn">Send Reset Link</button>

          <p className="link" onClick={() => setShowForgot(false)}>
            Back to Login
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
