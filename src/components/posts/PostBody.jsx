import React from "react";
import Moment from "react-moment";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as CommentIcon } from "../../assets/icons/comment.svg";
import { ReactComponent as DirectIcon } from "../../assets/icons/direct.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/bookmark.svg";

const PostBody = ({
  post = {
    imageUrl: "",
    instaHandle: "zak_sheve2",
    likes: 22,
    comment: "watch this space for something awesome",
    date: "1976-04-19T12:59-0500",
  },
}) => {
  return (
    <div className="posts-body">
      <div className="posts-body__image">
        <img src={post.imageUrl} alt={post.comment} />
      </div>
      <div className="posts-body__comments">
        <div className="posts-body__comments--icons">
          <div className="reactions">
            <HeartIcon />
            <CommentIcon />
            <DirectIcon />
          </div>
          <div className="bookmark">
            <BookmarkIcon />
          </div>
        </div>
        <div className="posts-body__comments--text">
          <div className="likes">
            <h5>{post.likes} likes</h5>
          </div>
          <div className="comment">
            <div className="handle">
              <h5>{post.instaHandle}</h5>
            </div>
            <div className="comment__text">
              <p>{post.comment}</p>
            </div>
          </div>
          <div className="time">
            <h5>
              <Moment fromNow>{post.date}</Moment>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
