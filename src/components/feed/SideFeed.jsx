import React from 'react';

import Profile from '../profile/Profile';
import Suggestions from '../suggestions/Suggestions';
import Footer from '../footer/Footer';

const SideFeed = () => {
    return (
        <section className="side-feed">
            <Profile />
            <Suggestions />
            <Footer />
        </section>
    );
}

export default SideFeed;
