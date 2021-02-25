import React from 'react';

import HomeTemplate from './HomeTemplate';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <HomeTemplate {...args} />;
export const Primary = Template.bind({});
//
// FirstStory.args = {
//   /* 👇 The args you need here will depend on your component */
// };
