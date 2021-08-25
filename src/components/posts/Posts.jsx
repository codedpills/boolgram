import React from "react";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

import zak from "../../assets/images/zak.png";

import "./posts.css";

const post = {
  imageUrl: zak,
  instaHandle: "zak_sheve2",
  likes: 22,
  comment: "watch this space for something awesome",
  date: "1976-04-19T12:59-0500",
};

const Posts = () => {
  return (
    <section className="posts">
      <PostHeader imageUrl={zak} InstaHandle="zak_sheve2" />
      <PostBody post={post} />
      <PostFooter />
    </section>
  );
};

export default Posts;
