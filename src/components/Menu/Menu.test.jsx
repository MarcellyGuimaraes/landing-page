import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
