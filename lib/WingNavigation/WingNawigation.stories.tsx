import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WingNavigation } from './index';

export default {
    title: 'WingNavigation',
    component: WingNavigation,
} as ComponentMeta<typeof WingNavigation>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof WingNavigation> = (args) => <WingNavigation {...args}/>;

export const Example = Template.bind({});

Example.args = {
    left: [ { label: "Item 1" }, { label: "Item 2" } ],
    right: [ { label: "Item 3" }, { label: "Item 4" } ]
};