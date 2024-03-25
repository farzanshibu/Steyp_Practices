import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./blogdetail.module.css";

function BlogDetail() {
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
      .then(function (response) {
        setBlog(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="loading">Loading ...</h1>;
  if (blog.length === 0) return <h1 className="no-data">No Data ...</h1>;
  return (
    <div className={styles.container}>
      <div className={styles.profileimage}>
        <img src={blog.author.image} alt="profile" />
      </div>
      <h4>{blog.title}</h4>
      <span>
        A guest post by <small>{blog.author.name}</small>
        {` on ${blog.posted_date}`}
      </span>
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogDetail;
