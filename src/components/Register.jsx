import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex align-items-center min-vh-100"
      style={{
        
        backgroundImage:
          "url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg) "
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-5">
            <div
              className="card shadow-sm border-light"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div className="card-header text-start bg- text-white rounded-top">
                <h3>Register</h3>
              </div>
              <div className="card-body p-4">
                <form>
                  {/* username */}
                  <div className="mb-3 mx-4">
                    <label htmlFor="username" className="form-label text-white fw-bold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      defaultValue={""}
                      // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                    />
                  </div>
                  {/* email */}
                  <div className="mb-3 mx-4">
                    <label htmlFor="email" className="form-label text-white fw-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      defaultValue={""}
                      // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                    />
                  </div>
                  {/* password */}
                  <div className="mb-3 mx-4">
                    <label htmlFor="password" className="form-label text-white fw-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      defaultValue={""}
                      // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                    />
                  </div>
                  {/* confirm password */}
                  <div className="mb-3 mx-4">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label text-white fw-bold"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm password"
                      defaultValue={""}
                      // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                    />
                  </div>

                  {/* register button */}
                  <div className="text-center">
                    <button type="submit" className="btn btn-info">
                      <span className="text-white fw-bold">Register</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* footer */}
              <div className="card-footer text-center py-3">
                <small>
                  <span className="text-light">Already have an account?</span>{" "}
                  <a href="#" className="text-white" onClick={navigate('/login')}>
                    Login here
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;