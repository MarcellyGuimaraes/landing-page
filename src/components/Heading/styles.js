import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
