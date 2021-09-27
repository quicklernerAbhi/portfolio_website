import React from "react";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";

function Project(props) {
  return (
    <Consumer>
      {(value) => {
        const id = props.match.params.id;
        console.log(id);
        const { blogs } = value;
        console.log(blogs);
        const blog = blogs.filter((blog) => blog.id == id)[0];
        const { imgUrl, title, excerpt } = blog;
        console.log(blog);
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imgUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown children={excerpt} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default Project;
