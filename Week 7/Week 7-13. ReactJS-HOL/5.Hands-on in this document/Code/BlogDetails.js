
import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs && blogs.map((blog, index) =>
        blog.title ? (
          <div key={index}>
            <h2>{blog.title}</h2>
            <h4><strong>{blog.author}</strong></h4>
            <p>{blog.content}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default BlogDetails;
