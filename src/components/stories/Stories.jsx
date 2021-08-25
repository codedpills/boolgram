import React, { useEffect, useState } from "react";

import { getStories } from "../../services/stories";

import StoryItem from "./StoryItem";

import "./stories.css";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStories().then((stories) => setStories(stories));
    setIsLoading(false);
  }, []);

  const storiesList = stories.map((story, idx) => (
    <StoryItem
      key={idx}
      imageUrl={story.profile_picture}
      text={story.profile_name}
    />
  ));

  return (
    <section className="stories">
      {!isLoading && stories.length > 0 ? storiesList : "loading..."}
    </section>
  );
};

export default Stories;
