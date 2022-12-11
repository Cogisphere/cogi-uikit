import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Field } from "./index";

export default {
    title: 'Field',
    component: Field,
} as ComponentMeta<typeof Field>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Empty = Template.bind({});

Empty.args = {
    label: 'Field label',
};

const WithInputTemplate: ComponentStory<typeof Field> = (args) => <Field {...args}><input type="text"/> </Field>;

export const WidthInput = WithInputTemplate.bind({});
WidthInput.args = {
    label: 'Input label'
};
