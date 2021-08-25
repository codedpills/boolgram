import React, { useState, useEffect } from "react";

import { getPosts } from "../../services/posts";

import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, []);

  console.log(posts);

  const postList = posts.map((post, idx) => {
    const newPost = {
      imageUrl: post.post_image,
      instaHandle: post.profile_name,
      likes: post.likes?.length,
      comments: post.comments,
      date: post.date.date,
    };

    return (
      <div className="post" key={idx}>
        <PostHeader
          imageUrl={post.profile_picture}
          InstaHandle={post.profile_name}
        />
        <PostBody post={newPost} />
        <PostFooter />
      </div>
    );
  });

  return (
    <section className="posts">
      {!isLoading && postList.length > 0 ? postList : "Loading..."}
    </section>
  );
};

export default Posts;
