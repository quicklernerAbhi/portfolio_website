import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ title, excerpt, imgUrl, id }) {
  return (
    <div>
      <div className="card shadow h-100">
        <img className="card-img-top" src={imgUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`blog/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
