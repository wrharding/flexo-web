import React from 'react';

import Dropdown from './Dropdown';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /* 👇 The args you need here will depend on your component */

  options: [
    { label: 'test', value: 1, id: 1 },
    { label: 'test', value: 2, id: 2 },
    { label: 'test', value: 3, id: 3 },
    { label: 'test', value: 4, id: 4 },
  ],
};
