import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shelf } from "../index";

export default {
    title: 'Shelf',
    component: Shelf,
} as ComponentMeta<typeof Shelf>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Shelf> = (args) => <Shelf {...args}/>;

export const Standalone = Template.bind({});
Standalone.args = {
    children: "A test text"
};

export const LongText = Template.bind({});
LongText.args = { 
    children: (
        <>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
            <p>Very long text that needs to be inserted inside the shelf.</p>
        </> 
    )
};