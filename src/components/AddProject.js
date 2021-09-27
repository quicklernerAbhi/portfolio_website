import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";
export default class AddProject extends Component {
  state = {
    imgUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (handler, e) => {
    e.preventDefault();

    const isSuccess = true;
    if (isSuccess) {
      this.setState({
        submitMessageTextColor: "text-success",
        submitMessage: `Project published successfully`,
      });
    } else {
      this.setState({
        submitMessageTextColor: "text-danger",
        submitMessage: ` Ooops! something went wrong please try later`,
      });
    }
    // let { title, imgUrl, excerpt, body } = this.state;
    let newProject = {
      title: this.state.title,
      imgUrl: this.state.imgUrl,
      excerpt: this.state.excerpt,
      body: this.state.body,
      id: uuid(),
    };
    handler("ADD_PROJECT", newProject);
  };
  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            submitMessage,
            submitMessageTextColor,
            imgUrl,
            title,
            excerpt,
            body,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center my-5 font-weight-light">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row px-3 px-lg-5">
                {/* for form and editor  */}
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label for="inputEmail1">Image Url*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="imgUrl"
                        id="imgUrl"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputTitle">Title*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label for="inputExcerpt">Excerpt*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="excerpt"
                        id="excerpt"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE onChange={this.onBodyChange} />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      // onSubmit={this.onSubmit.bind(this, handler)}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                {/* for real-time rendering  */}
                <div className="col-12 col-lg-6 markDown">
                  <div className="justify-content-center">
                    <img src={imgUrl} alt={title} className="img-fluid" />
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {title}
                  </h1>
                  <ReactMarkdown children={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
