import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Swatch } from "./index";
import { Color } from '@cogisphere/cogi-colors';

export default {
    title: 'Swatch',
    component: Swatch,
} as ComponentMeta<typeof Swatch>;

const Template: ComponentStory<typeof Swatch> = (args) => <Swatch {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    colors: []
};

export const Filled = Template.bind({});
Filled.args = {
    colors: [
        new Color('#A1DBB2'),
        new Color('#FEE5AD'),
        new Color('#FACA66'),
        new Color('#F7A541'),
        new Color('#F45D4C')
    ]
};