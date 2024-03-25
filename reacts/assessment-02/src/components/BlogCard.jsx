/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import styles from "./blogcard.module.css";
import { Link } from "react-router-dom";

function BlogCard(blog) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className={styles.container}>
        <div className={styles.profileimage}>
          <img src={blog.author.image} alt="profile" />
        </div>
        <h4>{blog.title}</h4>
        <span>
          A guest post by <small>{blog.author.name}</small>
          {` on ${blog.posted_date}`}
        </span>
        <p>{truncate(blog.description)}</p>
        <a href="#">Read more ...</a>
      </div>
    </Link>
  );
}

export default BlogCard;

const truncate = (str) => {
  return str.length > 10
    ? str.substring(0, 500)
    : str;
};
