import React from "react";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

import zak from "../../assets/images/zak.png";

import "./posts.css";

const Posts = () => {
  return (
    <section className="posts">
      <PostHeader imageUrl={zak} InstaHandle="zak_sheve2" />
      <PostBody />
      <PostFooter />
    </section>
  );
};

export default Posts;
