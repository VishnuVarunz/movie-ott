import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex align-items-center min-vh-100"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
                  <h3>Login Form</h3>
                </div>
                <div className="card-body p-4">
                  <form>
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
                      <label
                        htmlFor="password"
                        className="form-label text-white fw-bold"
                      >
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

                    {/* register button */}
                    <div className="text-center">
                      <button type="submit" className="btn btn-info">
                        <span className="text-white fw-bold">Login</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* footer */}
                <div className="card-footer text-center py-3">
                  <small>
                    <span className="text-light">Are you a new user?</span>{" "}
                    <a href="#" className="text-white" onClick={navigate('/register')}>
                      Register here
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;