import React from "react";
import PropTypes from "prop-types";

const StoryItem = ({ text = "sample text", imageUrl }) => {
  return (
    <div className="story-item">
      <button>
        <div className="story-item__img">
          <img src={imageUrl} alt={text} />
        </div>
        <div className="story-item__text">{text}</div>
      </button>
    </div>
  );
};

StoryItem.propTypes = {
  text: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default StoryItem;
