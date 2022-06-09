import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Listing from "./Listing";

export default {
    title: 'Listing',
    component: Listing,
} as ComponentMeta<typeof Listing>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Listing> = (args) => <Listing {...args}>
    <div style={ { backgroundColor: 'gray', height: '100px' } }/>
    <div style={ { backgroundColor: 'gray', height: '100px' } }/>
    <div style={ { backgroundColor: 'gray', height: '100px' } }/>
</Listing>;

export const Standalone = Template.bind({});

Standalone.args = {
    title: 'Card title',
};