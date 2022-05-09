import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Alias adipisci omnis nihil enim excepturi ullam cupiditate rerum
    inventore nulla accusamus obcaecati modi ea commodi totam, at debitis
    vitae harum reprehenderit?
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
