import React from "react";

import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div>
            <div className="container text-center py-5 my-5">
              <h1 className="font-weight-light">
                All <span className="text-info">Projects</span>
              </h1>
              <div className="lead">
                I build products. Just like this website
              </div>
              <div className="row my-5 pt-3">
                {projects.map((project) => (
                  <div key={project.id} className="col-12 col-md-6 my-2">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            <div className="my-5"></div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectSection;
