import React from "react";
import PropTypes from "prop-types";
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
    comments: [{ username: "arvid34", text: "Alice." }],
    date: "1976-04-19T12:59-0500",
  },
}) => {
  const comments = post.comments?.map((comment, idx) => (
    <div className="comment" key={idx}>
      <div className="handle">
        <h5>{comment.username}</h5>
      </div>
      <div className="comment__text">
        <p>{comment.text}</p>
      </div>
    </div>
  ));

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
          {comments}
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

PostBody.propTypes = {
  post: PropTypes.object,
};

export default PostBody;
