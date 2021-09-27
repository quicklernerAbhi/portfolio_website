import React from "react";

function Title() {
  let style = { fontSize: "50px" };
  return (
    <div>
      <div className="container">
        <div className="row text-center align-items-center my-5">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded-circle w-75"
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              alt="books"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="font-weight-light" style={style}>
              Hi, I am <span className="text-info">abhishek..</span>
            </div>
            <h4 className="font-weight-lighter">
              I am a Freelancer from India
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
