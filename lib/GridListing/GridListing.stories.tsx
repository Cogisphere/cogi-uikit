import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridListing, PaintCard } from '../index';
import { Data } from '@cogisphere/cogi-colors';

export default {
    title: 'GridListing',
    component: GridListing,
} as ComponentMeta<typeof GridListing>;

const paintLine = Data.instance.paintLines[0];

const PaintsTemplate: ComponentStory<typeof GridListing> = (args) => <GridListing>
        {paintLine.getOrderedByCoolness().map(paint => (<PaintCard paint={paint}/>))}
    </GridListing>;
export const PaintsListing = PaintsTemplate.bind({ });

