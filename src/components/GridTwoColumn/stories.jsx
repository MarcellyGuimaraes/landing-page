import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two column',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nisi necessitatibus minima, repellat ea repellendus amet,
    nostrum vitae pariatur ex saepe a blanditiis sed quas atque qui,
    perspiciatis vero consectetur ipsa.`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
