import React from "react";

import Profile from "../profile/Profile";
import Suggestions from "../suggestions/Suggestions";
import Footer from "../footer/Footer";

const SideFeed = () => {
  return (
    <section className="side-feed">
      <div className="side-feed__content">
        <Profile />
        <Suggestions />
        <Footer />
      </div>
    </section>
  );
};

export default SideFeed;
