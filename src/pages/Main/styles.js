import styled, { css } from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  ${props => css`
    ${props.loading && 'justify-content: center;'}
  `}
`;
