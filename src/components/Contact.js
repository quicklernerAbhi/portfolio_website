import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      description: "",

      submitMessage: "",
      submitMessageTextColor: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    let { name } = this.state;
    e.preventDefault();
    let isSuccesful = true;

    if (isSuccesful) {
      this.setState({
        submitMessage: `Thank you Mr. ${name}`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Ooops. something went wrong..plz try later.",
        submitMessageTextColor: "text-danger",
      });
    }
    console.log(this.submitMessage);
    console.log(this.submitMessageTextColor);
  };
  render() {
    const { submitMessageTextColor, submitMessage } = this.state;
    return (
      <div className="container my-5 py-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank you! </span>for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Tell me about your project *
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>

        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div>
      </div>
    );
  }
}
