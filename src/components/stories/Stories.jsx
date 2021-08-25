import React from 'react';

import StoryItem from './StoryItem';

import './stories.css';

import zak from '../../assets/images/zak.png'

const Stories = () => {
    return (
        <section className="stories">
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
            <StoryItem imageUrl={zak} />
        </section>
    );
}

export default Stories;
