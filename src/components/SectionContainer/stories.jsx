import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quam
          aut mollitia aliquam maiores quia, id cumque ullam sint dolorum
          pariatur eveniet, officia facere et sunt nesciunt consequatur nam
          voluptate!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
