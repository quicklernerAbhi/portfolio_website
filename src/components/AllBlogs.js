import React from "react";

import { Consumer } from "../context";
import BlogCard from "./BlogCard";

function BlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div>
            <div className="container text-center py-5 my-5">
              <h1 className="font-weight-light">
                All <span className="text-info">Blogs</span>
              </h1>
              <div className="lead">
                I write consistently on similar topics...
              </div>
              <div className="row my-5 pt-3">
                {blogs.map((blog) => (
                  <div key={blog.id} className="col-12 col-md-6 my-2">
                    <BlogCard
                      title={blog.title}
                      excerpt={blog.excerpt}
                      imgUrl={blog.imgUrl}
                      id={blog.id}
                    />
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

export default BlogSection;
