import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VersionList } from "../index";

export default {
    title: 'VersionList',
    component: VersionList,
} as ComponentMeta<typeof VersionList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof VersionList> = (args) => <VersionList versions={{
    "package-one": "1.0.0",
    "package-two": "2.0.0",
    "package-three": "3.0.0"
}}/>;

export const Standalone = Template.bind({});

Standalone.args = { };