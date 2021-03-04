import React from 'react';

import HomePage from './HomePage';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <HomePage {...args} />;
export const Primary = Template.bind({});

// FirstStory.args = {
//   /* 👇 The args you need here will depend on your component */
// };
