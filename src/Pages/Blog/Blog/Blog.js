import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { blogText, title, blogUrl } = props.blog;
  return (
    <div className="my-10 p-10">
      <h3 className="text-2xl font-bold text-left">{title}</h3>
      <p className=" first-letter:text-3xl first-letter:font-extrabold text-left">
        {blogText}{" "}
        <a target="_blank" href={blogUrl}>
          learn more
        </a>
      </p>
    </div>
  );
};

export default Blog;
