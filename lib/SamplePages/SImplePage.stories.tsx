import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WingNavigation, Footer, AppFrame, Header } from "../index";


function SimplePage() {
    return (
        <AppFrame>
            <WingNavigation
                left={[ { label: "Option 1" }, { label: "Option 2" }]}
                right={[ { label: "Option 3" }, { label: "Option 4" }]}
            />
            <section>
                <Header level={1} title="Sample content"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque nulla in varius consectetur. Etiam fermentum, arcu nec aliquet tristique, lacus dolor pulvinar orci, id egestas dolor velit eget est. Proin cursus nunc a tempus convallis. Ut sodales nulla eu fringilla tempus. Vestibulum at ligula sapien. Maecenas felis diam, tincidunt eu orci vel, vehicula porta eros. Aliquam vitae condimentum turpis, posuere hendrerit dolor. Sed tempus orci a massa rutrum aliquet. Aenean congue vel orci a dapibus. Sed mollis libero vel pellentesque luctus. Phasellus vestibulum ut felis a convallis. Mauris vitae ipsum pretium ante volutpat viverra fermentum in urna. Sed gravida, ligula vitae condimentum vulputate, ligula neque euismod nisl, eu suscipit lorem felis vel erat. Donec congue in metus nec consequat. Nulla sit amet enim et magna porta malesuada eu nec enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque nulla in varius consectetur. Etiam fermentum, arcu nec aliquet tristique, lacus dolor pulvinar orci, id egestas dolor velit eget est. Proin cursus nunc a tempus convallis. Ut sodales nulla eu fringilla tempus. Vestibulum at ligula sapien. Maecenas felis diam, tincidunt eu orci vel, vehicula porta eros. Aliquam vitae condimentum turpis, posuere hendrerit dolor. Sed tempus orci a massa rutrum aliquet. Aenean congue vel orci a dapibus. Sed mollis libero vel pellentesque luctus. Phasellus vestibulum ut felis a convallis. Mauris vitae ipsum pretium ante volutpat viverra fermentum in urna. Sed gravida, ligula vitae condimentum vulputate, ligula neque euismod nisl, eu suscipit lorem felis vel erat. Donec congue in metus nec consequat. Nulla sit amet enim et magna porta malesuada eu nec enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque nulla in varius consectetur. Etiam fermentum, arcu nec aliquet tristique, lacus dolor pulvinar orci, id egestas dolor velit eget est. Proin cursus nunc a tempus convallis. Ut sodales nulla eu fringilla tempus. Vestibulum at ligula sapien. Maecenas felis diam, tincidunt eu orci vel, vehicula porta eros. Aliquam vitae condimentum turpis, posuere hendrerit dolor. Sed tempus orci a massa rutrum aliquet. Aenean congue vel orci a dapibus. Sed mollis libero vel pellentesque luctus. Phasellus vestibulum ut felis a convallis. Mauris vitae ipsum pretium ante volutpat viverra fermentum in urna. Sed gravida, ligula vitae condimentum vulputate, ligula neque euismod nisl, eu suscipit lorem felis vel erat. Donec congue in metus nec consequat. Nulla sit amet enim et magna porta malesuada eu nec enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque nulla in varius consectetur. Etiam fermentum, arcu nec aliquet tristique, lacus dolor pulvinar orci, id egestas dolor velit eget est. Proin cursus nunc a tempus convallis. Ut sodales nulla eu fringilla tempus. Vestibulum at ligula sapien. Maecenas felis diam, tincidunt eu orci vel, vehicula porta eros. Aliquam vitae condimentum turpis, posuere hendrerit dolor. Sed tempus orci a massa rutrum aliquet. Aenean congue vel orci a dapibus. Sed mollis libero vel pellentesque luctus. Phasellus vestibulum ut felis a convallis. Mauris vitae ipsum pretium ante volutpat viverra fermentum in urna. Sed gravida, ligula vitae condimentum vulputate, ligula neque euismod nisl, eu suscipit lorem felis vel erat. Donec congue in metus nec consequat. Nulla sit amet enim et magna porta malesuada eu nec enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque nulla in varius consectetur. Etiam fermentum, arcu nec aliquet tristique, lacus dolor pulvinar orci, id egestas dolor velit eget est. Proin cursus nunc a tempus convallis. Ut sodales nulla eu fringilla tempus. Vestibulum at ligula sapien. Maecenas felis diam, tincidunt eu orci vel, vehicula porta eros. Aliquam vitae condimentum turpis, posuere hendrerit dolor. Sed tempus orci a massa rutrum aliquet. Aenean congue vel orci a dapibus. Sed mollis libero vel pellentesque luctus. Phasellus vestibulum ut felis a convallis. Mauris vitae ipsum pretium ante volutpat viverra fermentum in urna. Sed gravida, ligula vitae condimentum vulputate, ligula neque euismod nisl, eu suscipit lorem felis vel erat. Donec congue in metus nec consequat. Nulla sit amet enim et magna porta malesuada eu nec enim.</p>
            </section>
            <Footer>
                Version: 1.0.0
            </Footer>
        </AppFrame>
    );
};

export default {
    title: 'SamplePages/SimplePage',
    component: SimplePage,
} as ComponentMeta<typeof SimplePage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SimplePage> = (args) => <SimplePage/>;
    
export const Standalone = Template.bind({});
Standalone.args = { };