import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';

describe('<GridTwoColumn />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumn>Children</GridTwoColumn>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
