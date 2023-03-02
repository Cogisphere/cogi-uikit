import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from "./index";

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Plus = Template.bind({ });
Plus.args = {
    which: "plus"
};

export const Cross = Template.bind({ });
Cross.args = {
    which: "cross"
};

export const IntoInventory = Template.bind({ });
IntoInventory.args = {
    which: "into-inventory"
};

