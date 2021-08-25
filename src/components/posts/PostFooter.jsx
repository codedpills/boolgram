import React from "react";

import { ReactComponent as EmojiIcon } from "../../assets/icons/emoji.svg";

const PostFooter = () => {
  return (
    <div className="posts-footer">
      <div className="posts-footer__emoji">
        <EmojiIcon />
      </div>
      <form className="posts-footer__form">
        <input type="text" placeholder="Add a comment..." className="comment" />
        <button className="submit-btn" disabled>Post</button>
      </form>
    </div>
  );
};

export default PostFooter;
