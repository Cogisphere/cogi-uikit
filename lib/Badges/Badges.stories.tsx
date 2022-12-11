import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badges } from '../index';

export default {
    title: 'Badges',
    component: Badges,
} as ComponentMeta<typeof Badges>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badges> = (args) => <Badges {...args} />;

export const Default = Template.bind({});

Default.args = {
    badges: [
        { label: "Example 1" },
        { label: "Example 2" },
        { label: "Example 3" },
        { label: "Example 4", color: "red" },
        { label: "Example 5", color: "orange" }
    ]
};
