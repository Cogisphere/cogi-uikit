import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>Card content</Card>;

export const Standalone = Template.bind({});

Standalone.args = {
    title: 'Card title',
};

export const Image = Template.bind({});

Image.args = {
    title: 'Card title',
    image: 'https://www.google.com'
};

export const Action = Template.bind({});

Action.args = {
    title: 'Card title',
    actionTitle: 'Click me'
};

export const Selectable = Template.bind({});

Selectable.args = {
    title: 'Card title',
    selected: true,
    selectable: true,
    actionTitle: 'Click me'
}