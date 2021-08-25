import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as OptionsIcon } from "../../assets/icons/options.svg";

const PostHeader = ({ imageUrl, InstaHandle = "boleean" }) => {
  return (
    <div className="posts-header">
      <div className="posts-header__profile">
        <div className="posts-header__profile-image">
          <img src={imageUrl} alt={InstaHandle} />
        </div>
        <div className="posts-header__profile-info">
          <h5>{InstaHandle}</h5>
        </div>
      </div>
      <div className="posts-header__options">
        <button>
          <OptionsIcon />
        </button>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  imageUrl: PropTypes.string,
  InstaHandle: PropTypes.string,
};

export default PostHeader;
