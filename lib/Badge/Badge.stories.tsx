import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '../index';

export default {
    title: 'Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Standalone = Template.bind({});

Standalone.args = {
    label: 'Test label',
};

const LineTemplate: ComponentStory<typeof Badge> = (args) => <>
    <Badge {...args} />
    <Badge {...args} />
    <Badge {...args} />
    <Badge {...args} />
</>;

export const Line = LineTemplate.bind({});

LineTemplate.args = {
    label: 'Badge'
};