import React from "react";

function AboutMe() {
  return (
    <div>
      {/* <!-- About Me section  --> */}
      <div className="my-5">
        <div className="container bg-light text-center bg-grey my-5">
          <h1 className="text-center pt-5 text-dark font-weight-light">
            <span className="text-info">About </span>me
          </h1>
          <h3 className="lead">
            I can develop the front and the back of an app
          </h3>
          <div className="row my-5">
            <div className="col-12 col-md-6 h-100">
              <h2 className="text-dark">What can I do ?</h2>
              <p className="text-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                assumenda voluptas fuga expedita, eos esse commodi non ratione
                nostrum, officia cupiditate blanditiis sunt deserunt ipsa?
                assumenda voluptas fuga expedita, eos esse commodi non ratione
                nostrum, officia cupiditate blanditiis sunt deserunt ipsa?
              </p>
            </div>
            <div className="col-12 col-md-6 h-100">
              <h2 className="text-dark">What am I doing currently ?</h2>
              <p className="text-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                assumenda voluptas fuga expedita, eos esse commodi non ratione
                nostrum, officia cupiditate blanditiis sunt deserunt ipsa?
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-6 h-100">
              <h2 className="text-dark">What do I believe in ?</h2>
              <p className="text-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                assumenda voluptas fuga expedita, eos esse commodi non ratione
                nostrum, officia cupiditate blanditiis sunt deserunt ipsa? Lorem
                ipsum dolor sit amet consectetur, adipisia cupiditate blanditiis
                sunt deserunt ipsa? nostrum, officia cupiditate blanditiis sunt
                deserunt ipsa?
              </p>
            </div>
            <div className="col-12 col-md-6 h-100">
              <h2 className="text-dark">How I can help you ?</h2>
              <p className="text-secondary text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                assumenda voluptas fuga expedita, eos esse commodi non ratione
                nostrum, officia cupiditate blanditiis sunt deserunt ipsa?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
