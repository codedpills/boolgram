import React from "react";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as DirectIcon } from "../../assets/icons/direct.svg";
import { ReactComponent as CompassIcon } from "../../assets/icons/compass.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import zak from '../../assets/images/zak.png'

const IconsBar = () => {
  return (
    <div className="icons-bar">
      <button className="icons-bar__button">
        <HomeIcon />
      </button>
      <button className="icons-bar__button">
        <DirectIcon />
      </button>
      <button className="icons-bar__button">
        <CompassIcon />
      </button>
      <button className="icons-bar__button">
        <HeartIcon />
      </button>
      <button className="icons-bar__button">
        <img src={zak} alt="profile" className="profile" />
      </button>
    </div>
  );
};

export default IconsBar;
