import React from "react";

function Subscribe() {
  return (
    <div>
      <div className="container mt-5" id="container">
        <div className="row justify-content-center">
          <div className="col-md-4 card border-primary p-5">
            <form className="form-signin" action="/signUp" method="post">
              <h1 className="h3 mb-3 font-weight-normal">
                Subscribe to my Mailing List !
              </h1>
              <hr />
              <input
                type="text"
                name="fName"
                className="form-control top mb-2"
                placeholder="First Name"
                required
                autoComplete="off"
              />
              <input
                type="text"
                name="sName"
                className="form-control middle mb-2"
                placeholder="Last Name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                className="form-control bottom mb-2"
                placeholder="Email address"
                required
                autoComplete="off"
              />

              <button
                className="btn btn-outline-primary btn-block"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
