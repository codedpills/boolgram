import React from "react";

import MainFeed from "../components/feed/MainFeed";
import SideFeed from "../components/feed/SideFeed";

const Main = () => {
  return (
    <section className="main-section">
      <div className="feed">
        <MainFeed />
        <SideFeed />
      </div>
    </section>
  );
};

export default Main;
