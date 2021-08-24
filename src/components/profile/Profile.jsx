import React from "react";
import PropTypes from "prop-types";

import "./profile.css";

import zak from "../../assets/images/zak.png";

const Profile = ({
  image = { path: zak, height: 60 },
  instaHandle = "zak_sheve2",
  complimentaryText = "Zaky",
  linkText = "Switch",
}) => {
  return (
    <div className="profile_">
      <div className="profile__info">
        <img src={image.path} alt={instaHandle} height={`${image.height}px`} />
        <div className="text">
          <h5>{instaHandle}</h5>
          <p>{complimentaryText}</p>
        </div>
      </div>
      <div className="profile__link">
        <a href="/">{linkText}</a>
      </div>
    </div>
  );
};

Profile.propTypes = {
  image: PropTypes.object,
  instaHandle: PropTypes.string,
  complimentaryText: PropTypes.string,
  linkText: PropTypes.string,
};

export default Profile;
