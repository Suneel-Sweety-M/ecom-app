import React from "react";
import "../styles/login.css";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <section className="section">
        <div className="auth_container">
          <div className="auth_img">
            <img src="./images/auth-image.png" alt="" className="auth_image" />
          </div>
          <div className="auth_content">
            <form action="" className="auth_form">
              <h2 className="form_title">Login to your account</h2>
              <p className="auth_p">Enter your details below</p>
              <div className="form_group">
                <input type="email" placeholder="Email" className="form_input" />
              </div>
              <div className="form_group form_pass">
                <input
                  type="password"
                  placeholder="Password"
                  className="form_input"
                />
              </div>
              <div className="form_group">
                <button className="form_btn">
                  <a href="/" className="form_link">
                    Login
                  </a>
                </button>
              </div>
              <div className="form_group">
                <span>
                  Don't have an account?
                  <Link to="/register" className="form_auth_link">
                    Register
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section><br />
    </>
  );
};

export default Login;
