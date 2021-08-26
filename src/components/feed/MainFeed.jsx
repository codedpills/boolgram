import React from "react";

import Stories from "../stories/Stories";
import Posts from "../posts/Posts";

const MainFeed = () => {
  return (
    <section className="main-feed">
      <Stories />
      <Posts />
    </section>
  );
};

export default MainFeed;
