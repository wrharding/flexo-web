import React from 'react';

import AttackForm from './AttackForm';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'Molecules/AttackForm',
  component: AttackForm,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <AttackForm {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /* 👇 The args you need here will depend on your component */
  targetOptions: [
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
  ],
  categoryOptions: [
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
  ],
};
