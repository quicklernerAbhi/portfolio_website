import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  let { id, title, excerpt, imgUrl } = props.project;
  return (
    <div>
      <div className="card shadow h-100">
        <img className="card-img-top" src={imgUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/project/${id}`} className="stretched-link" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
