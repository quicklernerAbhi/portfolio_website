import React from "react";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";

function Project(props) {
  return (
    <Consumer>
      {(value) => {
        const id = props.match.params.id;
        console.log(id);
        const projects = value.projects;
        console.log(projects);
        const project = projects.filter((project) => project.id == id)[0];
        const { imgUrl, title, body } = project;
        console.log(project);
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imgUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown children={body} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default Project;
