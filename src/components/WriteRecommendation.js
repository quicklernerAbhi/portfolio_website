import React, { Component } from "react";
import { Consumer } from "../context";

export default class WriteRecommendation extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      compony: "",
      designation: "",
      message: "",
      submitRecommTextColor: "",
      submitRecomm: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (handler, e) => {
    e.preventDefault();
    let { name } = this.state;
    const isSuccess = true;
    if (isSuccess) {
      this.setState({
        submitRecommTextColor: "text-success",
        submitRecomm: `Thank you Mr.${name}, We will definately work on it`,
      });
    } else {
      this.setState({
        submitRecommTextColor: "text-danger",
        submitRecomm: ` Ooops! something went wrong please try later`,
      });
    }
    let newRecommendation = {
      id: 3,
      name: this.state.name,
      company: this.state.compony,
      designation: this.state.designation,
      message: this.state.message,
    };
    handler("ADD_RECOMMENDATION", newRecommendation);
    console.log(newRecommendation);
  };
  render() {
    let { submitRecommTextColor, submitRecomm } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { handler } = value;
          return (
            <div className="container my-5 py-5">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank you! </span>for your valuable
                time
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
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
                      <label htmlFor="compony">Compony/Institution *</label>
                      <input
                        type="text"
                        name="compony"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation*</label>
                      <input
                        type="text"
                        name="designation"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recommendation">
                        Any Recommendation *
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      // onSubmit={this.onSubmit.bind(this, handler)}
                      type="submit"
                      className="btn btn-danger float-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Lots of Love
                    </button>
                  </form>
                </div>
              </div>

              <div className="py-5 mx-2 text-center">
                <h5 className={submitRecommTextColor}>{submitRecomm}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
