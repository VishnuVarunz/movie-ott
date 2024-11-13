import React from "react";
import Navbar from "./Navbar";


function Changepassword() {

   


  return (
    <>
     
      <div className="d-flex align-items-center min-vh-100 bg-dark"> 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div
                className="card shadow-sm border-light"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="card-header text-start bg- text-white rounded-top" data-aos="fade-up">
                  <h3>Change Password</h3>
                </div>
                <div className="card-body p-4">
                  <form>
                    {/* Current Password */}
                    <div className="mb-3 mx-4">
                      <label
                        htmlFor="email"
                        className="form-label text-white fw-bold"
                      >
                        Current Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your current password"
                        defaultValue={""}
                        // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                      />
                    </div>
                    {/* New Password */}
                    <div className="mb-3 mx-4">
                      <label
                        htmlFor="password"
                        className="form-label text-white fw-bold"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your new password"
                        defaultValue={""}
                        // style={{backgroundColor: "rgba(255, 255, 255, 0.6)",color: "#fff",}}
                      />
                    </div>
                    {/* confirm password */}
                    <div className="mb-3 mx-4">
                      <label
                        htmlFor="Enter your new password"
                        className="form-label text-white fw-bold"
                      >
                        Confirm New Password
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
                      <button type="submit" className="btn btn-success">
                        <span className="text-white fw-bold">
                          Change Password
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* footer */}
                <div className="card-footer text-center py-3">
                  {/* <small>
                  <span className="text-light">Already have an account?</span>{" "}
                  <a href="#" className="text-white">
                    Login here
                  </a>
                </small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Changepassword;