import styled, { css } from 'styled-components/native';
import { metrics } from '~/styles';

export const SafeAreaView = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;

  ${props => css`
    ${props.loading && 'justify-content: center;'}
  `}
`;

export const HeaderRight = styled.TouchableOpacity`
  margin-right: ${metrics.basePadding};
`;
