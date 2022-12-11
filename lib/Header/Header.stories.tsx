import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from "../index";

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LevelOne = Template.bind({});

LevelOne.args = {
    title: 'Grand title of the section',
};

export const LevelTwo = Template.bind({});

LevelTwo.args = {
    title: 'Grand title of the section',
    level: 2
};

export const LevelThree = Template.bind({});

LevelThree.args = {
    title: 'Grand title of the section',
    level: 3
};