import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextualControls } from "../index";

export default {
    title: 'ContextualControls',
    component: ContextualControls,
} as ComponentMeta<typeof ContextualControls>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ContextualControls> = (args) => <ContextualControls {...args} />;

export const JustRemove = Template.bind({ });
JustRemove.args = {
    items: [
        { icon: "cross", label: "remove" }
    ]
};

export const OnlyIcons = Template.bind({ });
OnlyIcons.args = {
    items: [
        { icon: "cross", onClick: () => alert("cross") },
        { icon: "plus", onClick: () => alert("plus") },
    ]
};