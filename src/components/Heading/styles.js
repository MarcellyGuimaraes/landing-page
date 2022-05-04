import styled from 'styled-components';
import { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.mainBg};
  `}
`;
