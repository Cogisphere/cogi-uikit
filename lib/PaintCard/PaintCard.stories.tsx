import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextualControls, PaintCard } from "../index";
import { Paint } from '@cogisphere/cogi-colors';

export default {
    title: 'PaintCard',
    component: PaintCard,
} as ComponentMeta<typeof PaintCard>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PaintCard> = (args) => <PaintCard {...args} />;

const paint = new Paint({ hex: '#dd55cd', paintCode: "test-something", name: "Test paint" });

export const Default = Template.bind({ });
Default.args = {
    paint
};

export const WithControls = Template.bind({ });
WithControls.args = {
    paint,
    controls: (<>
      <button>Click</button>  
      <span>Controls</span>
    </>)
};

export const WithContextualControls = Template.bind({ });
WithContextualControls.args = {
    paint,
    controls: (<ContextualControls items={[
        { icon: "plus" },
        { icon: "cross" }
    ]}/>)
};
