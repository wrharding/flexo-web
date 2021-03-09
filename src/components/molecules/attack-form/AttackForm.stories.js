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
    { label: 'target', value: 'target' },
    { label: 'target', value: 'target' },
    { label: 'target', value: 'target' },
    { label: 'target', value: 'target' },
  ],
  categoryOptions: [
    { label: 'category', value: 'category' },
    { label: 'category', value: 'category' },
    { label: 'category', value: 'category' },
    { label: 'category', value: 'category' },
  ], teamOptions: [
    { label: 'team', value: 'team' },
    { label: 'team', value: 'team' },
    { label: 'team', value: 'team' },
    { label: 'team', value: 'team' },
  ],
    handleSubmit: (data) => {
      console.log("HandleSubmit triggered :", data)
    }
};
