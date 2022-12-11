import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section, Header, Field } from "../index";

export default {
    title: 'Section',
    component: Section,
} as ComponentMeta<typeof Section>;

//👇 We create a “template” of how args map to rendering
const ContentTemplate: ComponentStory<typeof Section> = (args) => <Section {...args}>
    <Header level={1} title="Big header"/>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <Header level={2} title="Smaller title"/>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p>
    <Header level={3} title="Even smaller title"/>
    <p>
        There is no such thing as innocence - only varying degrees of guilt.
        Only the awkward question; only the foolish ask twice.
        Success is measured in blood; yours or your enemy's.
        The reward for treachery is retribution.
        Hope is the beginning of unhappiness.
        Even a man who has nothing can still offer his life.
        Inspiration grows from the barrel of a gun.
        Walk softly and carry a big gun.
    </p> 
</Section>;

export const Standalone = ContentTemplate.bind({});
Standalone.args = { };

const FormTemplate: ComponentStory<typeof Section> = (args) => <Section {...args}>
    <Header level={1} title="Form section"/>
    <form>
        <Field label="Name">
            <input type="text"/>
        </Field>
        <Field label="Type">
            <select name="type">
                <option>Sample 1</option>
                <option>Sample 2</option>
            </select>
        </Field>
        <Field label="Comment">
            <textarea name="comment"></textarea>
        </Field>
    </form>
</Section>;

export const Form = FormTemplate.bind({});