import React from "react";

import Profile from "../profile/Profile";

import "./suggestions.css";

import elon from "../../assets/images/elon.jpeg";
import eden from "../../assets/images/eden.jpeg";
import boolean from "../../assets/images/boolean.png";
import chelsea from "../../assets/images/chelsea.jpeg";

const sampleSuggestions = [
  {
    image: {
      path: chelsea,
      height: 40,
    },
    handle: "chelseafc",
    complimentary: "New to instagram",
  },
  {
    image: {
      path: elon,
      height: 40,
    },
    handle: "elonmusk",
    complimentary: "Followed by charles + 11 more",
  },
  {
    image: {
      path: eden,
      height: 40,
    },
    handle: "edenhazard10",
    complimentary: "Suggested for you",
  },
  {
    image: {
      path: boolean,
      height: 40,
    },
    handle: "boolean",
    complimentary: "Followed by everyone",
  },
];

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__heading">
        <h4>Suggestions for you</h4>
        <a href="/" className="link">
          See All
        </a>
      </div>
      <div className="suggestions__list">
        {sampleSuggestions.map((suggestion, idx) => (
          <Profile
            key={idx}
            image={suggestion.image}
            instaHandle={suggestion.handle}
            complimentaryText={suggestion.complimentary}
            linkText="Follow"
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
